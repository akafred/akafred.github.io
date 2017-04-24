---
layout: post
title:  "My budget virtual server in the cloud"
dek:    "Setting up and securing my server"
lede:   "Years ago I set up a blog and a couple of other things on a shared hosting-server; this was so long ago that virtualized servers were rare. Long overdue I am moving to a virtual private server - with a lot more flexibility. First step is to set up some basic provisioning (I use Ansible) and secure the server (using ufw and fail2ban)."
image:
  feature: /assets/5518162733_a88aebc06c_z.jpg
  title: "\"Yellow Clouds, Blue Sky\" (cropped)"
  src: https://www.flickr.com/photos/yortw/5518162733
  creator-name: Yortw
  creator-url: https://www.flickr.com/people/yortw/
  license: CC BY 2.0
  license-url: https://creativecommons.org/licenses/by/2.0
date:   2016-03-02 14:00:00
tags: vps ansible ufw fail2ban debian vagrant
---

## The server

First things first, I decided [on a budget VPS-server from Contabo][contabo-vps-m], at €9.99 (now €7.99!) per month (with a further €2/month discount because I bought 3 months up front). The server is in Germany, so pings are not terrible from Norway (where I live). You can check [how my server compares][serverbear-score] on [ServerBear][serverbear.com].

I have chosen Debian as my server os, so it was delivered with a pretty minimal Debian stable/jessie (initially Debian 8.3), and it can be accessed using ssh.

## Everything on GitHub

My plan is to put my setup in [a github-repo called _formasjon_][github-formasjon], and you are [fairly free to reuse anything and everything][license] if you find it interesting, at your own peril, of course. ('Formasjon' is the Norwegian word for 'formation'.)

## Development and staging in Vagrantboxes

To reduce the risk of making changes I use two local virtual machines (VMs) running in [VirtualBox][VirtualBox]. These are set up using [Vagrant][Vagrant]. Both tools are installed on my Mac using [Homebrew][Homebrew].

The two servers:

* `devmain` - I poke around in this one manually while developing the automation scripts.
* `localmain` - I use this for staging to make sure my automation works as it should.

The setup for the VMs are described [in a Vagrantfile][original-Vagrantfile].

The installations of Debian in these VMs differ a little in the packages installed (they have more than the VPS), I'll guess I'll figure out how to handle that as I go along.

## ssh-keys

To secure communication with the server I have generated a public/private key-pair using OpenSSH and copied them to the VMs and the VPS.

    cd provision # <1>
    ssh-keygen -t rsa -b 4096 -C "formasjon" # <2>
    ./copy-public-key-dev.sh // <3>
    ./copy-public-key-staging.sh
    ./copy-public-key-prod.sh <sshuser> <vps-server-ip>  # <4>

<1> I do provisioning operations in this folder

<2> Make sure to save the keys in the provision/ssh-folder

<3> I made a couple of helper scripts for doing the copying (yeah, I know, duplication)

<4> The user and IP is not in the "prod"-script

## Ansible

I use Ansible for automation and running commands remotely, which will be very helpful when I have a large formation of servers flying among the clouds…

I use three inventory files for Ansible, `dev`, `staging`, and an encrypted one for `prod`, as you can see from [this commit][a167acdadf64221c8798ed04caf7080a36b14e97]. The inventory files contain information about the server(s) in each environment and on how to connect to them. By encrypting the prod-inventory I can hide potentially sensitive information. Ansible has a feature called [Ansible Vault][vault] that makes it quite easy to work with.

To edit the prod inventory: `ansible-vault edit prod`

If you get tired of typing the vault passphrase you can add: `--vault-password-file ~/.vault_pass` and store the passphrase in `~/.vault_pass`.

## The main Ansible playbook

My main playbook is called `site.yml` and should be possible to run at all times.

The complete ansible command to run it is:

`ansible-playbook -v --vault-password-file ~/.vault_pass --key-file=ssh/id_rsa -i prod site.yml`

My VPS did not have all the required packages to run most of the ansible modules (python being the most obvious missing piece). To fix this I started with a role for getting the prereq's in place. You'll find everything in [this commit][870f6e4f0ff3d02596a6ebd3863160d85fa071ef].

To repeatedly use the same arguments when invoking ansible is a bit tedious so [I have made a couple of helper scripts][f779568609cf11df5e04652d135bc73bb44d5b87]:

* `run` - to run ansible commands, e.g `./run all -i dev -a "apt list --upgradeable"` or `./run all -i prod -m ping`
* `play` - to run ansible playbooks, e.g `./play -i dev site.yml`

## Upgrading packages

A first step in making my server a bit more secure is to upgrade packages. To check if there is a need I can do:

`./run all -i dev -a "apt list --upgradable"`

To upgrade I use [upgrade.yml, a very short Ansible playbook][c2ea61179bfc1240d319437aa4a9b21fb9230c28], to run the playbook I can do:

`./play -i dev upgrade.yml`

## Firewall and fail2ban

I use [ufw][ufw] for my firewall as it is a bit easier to use than iptables directly; Ansible also has [a module for it][ufw-module]. The role has [a simple set of tasks][firewall-tasks].

Also, to limit the chance of brute-forcing password-based SSH-users I added [fail2ban][fail2ban]. Thankfully someone has already created [a role for fail2ban][fail2ban-role] (pulled from [Ansible Galaxy][galaxy]), all I did was put it in my [base-setup.yml][base-setup.yml], add some [host][dev-fail2ban]-[specific][staging-fail2ban] [variables][prod-fail2ban] and press play (or rather `./play -i dev site.yml`). As a sidenote, I suggest you use fail2ban, and not denyhosts for this, as [denyhosts seems to be abandonware][denyhosts-abandonware].

The whole firewall/fail2ban-setup is in [this commit][427ffe0e97fed5c49431e40cd6bd5d1f15d9c94c].

The final git state can be found on the tag [blog-2016-03-02][blog-2016-03-02].

Btw … any [server with ssh is continually being attacked][livesshattack] so you should make sure your servers are secure.

Now that my server is fairly secure I can take a few days to ponder my next steps for my VPS. Perhaps OpenVPN? Suggestions?


[contabo-vps-m]: https://contabo.com/?show=configurator&vserver_id=145
[serverbear-score]: http://serverbear.com/benchmark/2016/03/01/2T1T3dhoa4N16Hob
[serverbear.com]: http://serverbear.com/
[github-formasjon]: https://github.com/akafred/formasjon
[license]: https://raw.githubusercontent.com/akafred/formasjon/master/LICENSE
[VirtualBox]: https://www.virtualbox.org/
[Vagrant]: https://www.vagrantup.com/docs/
[Homebrew]: http://brew.sh/
[original-Vagrantfile]: https://github.com/akafred/formasjon/blob/5d5184bb1ea7ab98cc54f086cc0f10344f10627e/provision/Vagrantfile
[a167acdadf64221c8798ed04caf7080a36b14e97]: https://github.com/akafred/formasjon/commit/a167acdadf64221c8798ed04caf7080a36b14e97
[vault]: http://docs.ansible.com/ansible/playbooks_vault.html
[870f6e4f0ff3d02596a6ebd3863160d85fa071ef]: https://github.com/akafred/formasjon/commit/870f6e4f0ff3d02596a6ebd3863160d85fa071ef
[f779568609cf11df5e04652d135bc73bb44d5b87]: https://github.com/akafred/formasjon/commit/f779568609cf11df5e04652d135bc73bb44d5b87
[c2ea61179bfc1240d319437aa4a9b21fb9230c28]: https://github.com/akafred/formasjon/commit/c2ea61179bfc1240d319437aa4a9b21fb9230c28
[ufw]: https://wiki.debian.org/Uncomplicated%20Firewall%20(ufw)
[ufw-module]: https://docs.ansible.com/ansible/ufw_module.html
[firewall-tasks]: https://github.com/akafred/formasjon/blob/427ffe0e97fed5c49431e40cd6bd5d1f15d9c94c/provision/roles/firewalled/tasks/main.yml
[base-setup.yml]: https://github.com/akafred/formasjon/blob/427ffe0e97fed5c49431e40cd6bd5d1f15d9c94c/provision/base-setup.yml
[dev-fail2ban]: https://github.com/akafred/formasjon/blob/427ffe0e97fed5c49431e40cd6bd5d1f15d9c94c/provision/dev
[staging-fail2ban]: https://github.com/akafred/formasjon/blob/427ffe0e97fed5c49431e40cd6bd5d1f15d9c94c/provision/staging
[prod-fail2ban]: https://github.com/akafred/formasjon/blob/427ffe0e97fed5c49431e40cd6bd5d1f15d9c94c/provision/prod
[427ffe0e97fed5c49431e40cd6bd5d1f15d9c94c]: https://github.com/akafred/formasjon/commit/427ffe0e97fed5c49431e40cd6bd5d1f15d9c94c
[fail2ban]: http://www.fail2ban.org
[fail2ban-role]: https://galaxy.ansible.com/nickjj/fail2ban/
[denyhosts-abandonware]: https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=732712
[galaxy]: https://galaxy.ansible.com/
[blog-2016-03-02]: https://github.com/akafred/formasjon/tree/blog-2016-03-02
[livesshattack]: https://livesshattack.net/
