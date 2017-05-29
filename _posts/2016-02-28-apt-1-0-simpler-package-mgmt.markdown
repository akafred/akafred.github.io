---
layout: post
title:  "apt 1.0 - old dog with new tricks"
dek:    "The package manager for Debian 'just' got more user friendly"
lede:   "If you're a Debian (or Ubuntu) Linux user you can probably use the simpler 'apt'-command and forget about 'apt-get', 'apt-cache' and 'dpkg'."
date:   2016-02-28 08:00:00
categories: linux devops package-management debian ubuntu
tags: linux devops package-management debian ubuntu
image: /assets/post4-image.jpg
image-src: https://www.pexels.com/photo/gray-laptop-computer-showing-html-codes-in-shallow-focus-photography-160107/
image-creator-name: Negative Space
image-creator-url: http://negativespace.co/photos/laptop-notebook-and-iphone-stock-photo/
image-license: CC0 License
image-license-url: https://www.pexels.com/photo-license/
---
Managing installed packages is a core \*nix-user skill. If you use Debian (or a Debian-derived Linux distro like Ubuntu) on servers you are probably familiar with `apt-get`, `apt-cache` and `dpkg`; or perhaps you have given in and turned to the text-ui of `aptitude`. APT, a tool that was originally released in 1998(!), got to version 1.0 in 2014(!!) and with the 1.0 release came a set of simpler commands for managing packages.

While it takes a little while for new versions of software to update in distros, it seems like it takes a lot longer for obsolete guides to APT to be pushed out of the top spots in the search engines. Of course you can still use the lower level tools (`apt-get`, `apt-cache` or even `dpkg`), but `apt` is probably easier in most cases.

So let's get to the good stuff, here are the new `apt`-commands you need the most:

* `apt search <terms>` -- search for packages, e.g `apt search zsh shell`
* `apt list <pkg> \[--installed\] \[--upgradable\] \[--all-versions\]` -- list packages, optionally installed, outdated or with all versions available locally, e.g. `apt list --upgradeable` or `apt list apache2 --all-versions`
* `apt show <pkg> \[--all-versions\]` -- show package information, e.g `apt show apache2`
* `apt install <pkg> \[\{=pkg_version_number | /target_release\}\]`  -- to install packages, _optionally_ a specific version or release (e g `testing` or `stable`), e.g, `apt install zsh/stable`
* `apt edit-sources` -- simple way to get to edit your sources.list
* `apt update` -- update package index files from sources (e.g after `apt edit-sources`)
* `apt upgrade` -- upgrade all installed packages to their latest versions
* `apt full-upgrade` -- do a smart upgrade of packages, taking dependencies into account (might remove dependencies)
* `apt remove <pkg>` -- remove package (but not configuration files), e.g `apt remove apt-doc`

Happy apt-ing!
