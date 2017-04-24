---
layout: post
title:  "Simple monitoring of web sites"
dek:    "Uptime monitoring using UptimeRobot – in under 60 mins"
lede:   "If you haven't got uptime monitoring on your site, there really is no excuse as you can set up something with minimal effort and free of charge."
image:
  feature: /assets/uptimerobot.png
  title: (screencap from website)
  license: Copyright&copy;UptimeRobot
  creator-name: UptimeRobot
  creator-url: https://uptimerobot.com/
  license: Copyright&copy;UptimeRobot
date:   2014-12-10 23:00:00
tags: devops monitoring
---
My last customer was one of the top three web sites in Norway, and as their entire business was built on the web they were pretty advanced when it comes to IT-operations and monitoring their services. I learned a lot about ops during the three years I was there, and especially the last year when we built a new application which didn't have all the bells and whistles (and warts) of the somewhat older application stack we replaced.

Summer 2014 - new customer. A customer with several hundred years of history in the physical world - and in fact one of the very top cultural institutions in Norway by number of visitors. But times they ar'a changing, and even if their offerings are increasingly digital they haven't had the resources to build, manage and continuously improve their IT-operations setup for all the new services they have built.

_So ... where to begin?_

Actually, our first step ended up being more concerned about new stuff ... which perhaps wasn't ideal. It would probably have been better to start by improving IT-operations around existing services - but that wasn't the way the cookie crumbled ... However - today we took a step we should have taken a while back:

*Establish simple monitoring of the externally available services*

There are many ways to approach this, but in this case we just picked a solution that seemed simple to get started with. Here is a list of [50 Free Uptime Monitoring Services][free-uptime-monitoring-services]. We read up a little on the first one mentioned - [UptimeRobot][uptimerobot] and just went with it to get started.

UptimeRobot gives you _four types of monitors_:

* *HTTP(s)* - which does an HTTP HEAD-request and checks for 200 OK
* *Keyword* - checks web page content (from a GET request) for presence or absence of a specific word or phrase (keyword)
* *Ping* - checks for response from ICMP ping
* *Port* - which we guess checks if it can create a TCP-connection to a specific port on a host

It is worth noting that UptimeRobot's primary servers are in Dallas, TX, so for a primarily local service in Oslo, Norway, the response times are somewhat high and there is a lot of network infrastructure between them and us that might cause "false positives". Also one should make sure the monitoring traffic doesn't skew web stats (especially the Keyword monitor can possibly affect stats).

UptimeRobot checks every 5 to 120 minutes (configurable).

When a check causes a change in state from UP to DOWN (or DOWN to UP) you can ask UptimeRobot to notify you using a number of mechanisms:

* Free SMS (this is a somewhat limited offering)
* Email
* Twitter
* Webhook (they perform a GET-request to a URL of your choice)
* Slack (notification to a user or channel)
* HipChat (notification to a room)

In addition they support three notification apps:

* Pushbullet
* Pushover
* Boxcar 2

UptimeRobot is a free service and if they fail or go down you haven't paid them any money you can ask them to return ... And they acknowledge that there might be false positives - e.g because their servers are overloaded. But for us this is also about learning about monitoring and hopefully a lot better than learning _through the grapevine_ that our services are down.

We spent about 45 minutes this morning configuring the first 5-6 monitors (one of each type) and setting up a couple of notification channels (email, Slack). We knew that there would be some planned service interuptions this evening so we have already got some results. Tomorrow we will have to correlate the notifications with the actual disruptions. One thing we have already seen is that at one or two monitors didn't switch back to UP when the service came back up. Cycling the monitor (PAUSE - START) brought it back to UP. Annoying, but not as important as not getting DOWN-notifications if a service goes down.

### Twitter feedback

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/akafred">@akafred</a> Pingdoms free plan is worth checking out too for small sites. Geo distributed.</p>&mdash; Denis Braekhus (@denisb) <a href="https://twitter.com/denisb/status/545172124064026625">December 17, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[free-uptime-monitoring-services]: http://blog.woorank.com/2014/05/50-free-uptime-monitoring-services/
[uptimerobot]: http://uptimerobot.com/
