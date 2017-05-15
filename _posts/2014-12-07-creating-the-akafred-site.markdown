---
layout: post
title:  "Creating the akafred blog site"
dek:    "Static site generation with Jekyll and Github Pages"
lede:   "Using a static site generation tool for your blog makes your blog performant and secure. Using Docker helps you get started quickly."
date:   2014-12-07 12:00:00
update: 2014-12-16 20:00:00
categories: static-site-generation jekyll docker blogging clicky disqus
tags: static-site-generation jekyll docker blogging clicky disqus
image: /assets/post7-image.jpg
image-src: https://www.pexels.com/photo/hands-coffee-cup-apple-5199/
image-creator-name: Stokpic
image-creator-url: http://stokpic.com/project/mans-hands-typing-on-laptop-with-smartphone-book-and-coffee/
image-license: CC0 License
image-license-url: https://www.pexels.com/photo-license/
---
_Aller anfang ist schwer_ my German teacher told us, and oh my! does that apply to blogging when you are a techie, who—in theory at least—could have *built* a blogging platform _if you just had the time_. It does not help that you have [extremely capable colleagues][kodemaker] who probably have done just that. Obviously the abandoned WordPress-blog from yesteryear does not cut it anymore ...

As [static site generators][ssg] are all the rage now, I decided to try the most popular one, [Jekyll][jekyll]. Jekyll was originally created 6 years ago by the now ousted Github founder, [Tom Preston-Werner][tpw], but seems to be [in active development][jekyll-stats] still. There are [other popular static site generators][6-static-blog-generators-arent-jekyll], but I chose to just go with the flow, trying not to create extra pre-blogging hurdles for myself.

Static site generators have a some very nice characteristics:

* Page generation happens generation-time, not when serving the page, which means a faster site and lower server load.
* Less code and fewer components on the server reduces the attack vector, your site can be made more secure.
* No relational database with state, and in fact, after the site is generated it is immutable - which makes it easier to reason about.
* Usually your site is generated from plain old text files (and perhaps the odd image), which is very amenable to revision control systems.

While static site generators demand very little from your web server you still need infrastructure to run your generator, and sometimes that may be non-trivial to set up. I love [Docker][docker] and isolating the generator using containerization is a really sweet idea. The presence of a [Docker image with Jekyll][grahamc_jekyll] made choosing Jekyll even easier.

Another great thing about Jekyll, is that it is what Github uses for its User, Project and Organization pages, so if you can leave it to them to do both page generation and serve the pages - if you want to.

Setting up your own [Github Pages][pages] site is easy, and when you've [generated a Jekyll site][jekyll] locally you can just push it to your Pages repo. If you want a custom domain name (not \*.github.io) there are just [a few small things you have to do with your DNS provider][CNAME-record], and [add a file to your repo][CNAME-file].

One nice benefit of using Github Pages is that you get to use Github's CDN solution, which makes your web page snappier around the world than if you just put your page on some host. (I know this is not a perfect test for this, but you can use a service like [24x7 to check ping][2nx7ping] from dozens of places around the world, to get a feel for network roundtrip times.)

One of the chief drawbacks of a static site is that there is nowhere to put discussions and feedback, and when using Github Pages no server statistics you can analyze. This was easy to solve adequately for my use; I've added [Clicky][clicky] for webstats and [Disqus][disqus] for discussions. I've also been careful to add their async JavaScripts so their impact on page loading is kept pretty minimal.

You'll find [the git repo backing this site on Github][akafred-github-io], where you will see things like how easy it is to [add Clicky][clicky-commit] or [Disqus][disqus-commit] after you have signed up on their sites.

### Twitter feedback

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/akafred">@akafred</a> Do I have to :P Disqus is .. well .. not my favourite (I rewrote this with nicer words three times).</p>&mdash; Denis Braekhus (@denisb) <a href="https://twitter.com/denisb/status/545302476103356417">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/denisb">@denisb</a> Interesting! I have a post where I mention Disqus - is using Disqus to diss Disqus something we can discuss? <a href="http://t.co/MxkKTRI0rJ">http://t.co/MxkKTRI0rJ</a></p>&mdash; a.k.a Fred :-) (@akafred) <a href="https://twitter.com/akafred/status/545316168924659712">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/akafred">@akafred</a> Well, I’d much rather diskuss it on twitter tbh. It’s bad on so many levels. Security, tracking, slowness..</p>&mdash; Denis Braekhus (@denisb) <a href="https://twitter.com/denisb/status/545317629171601408">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/denisb">@denisb</a> I have disabled &#39;anonymous cookie tracking&#39;, and it loads async so doesn&#39;t affect page load much. Security? Alternatives to Disqus?</p>&mdash; a.k.a Fred :-) (@akafred) <a href="https://twitter.com/akafred/status/545329790593798144">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/akafred">@akafred</a> Spotty track record in fixing bugs, misfeatures that enable stalkers and harassers and not protecting identities.</p>&mdash; Denis Braekhus (@denisb) <a href="https://twitter.com/denisb/status/545330967398088706">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/akafred">@akafred</a> Alternatives: discussions on twitter! ;-)</p>&mdash; Denis Braekhus (@denisb) <a href="https://twitter.com/denisb/status/545331024587390976">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/akafred">@akafred</a> Admittedly not much of this applies to your blog, but it’s wider problems with the company, and I’d rather not give them my ID.</p>&mdash; Denis Braekhus (@denisb) <a href="https://twitter.com/denisb/status/545331269023064065">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/denisb">@denisb</a> You don’t have to give an ID :-) You can use pron mode, Tor and post as guest :)</p>&mdash; a.k.a Fred :-) (@akafred) <a href="https://twitter.com/akafred/status/545333335745372161">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/akafred">@akafred</a> Duh, you’re destroying my arguments with boring facts.</p>&mdash; Denis Braekhus (@denisb) <a href="https://twitter.com/denisb/status/545333561487003648">December 17, 2014</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/denisb">@denisb</a> I know. Hate it when people do that.</p>&mdash; a.k.a Fred :-) (@akafred) <a href="https://twitter.com/akafred/status/545333760070541312">December 17, 2014</a></blockquote>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[kodemaker]: http://www.kodemaker.no/
[ssg]:    https://staticsitegenerators.net/
[jekyll]: http://jekyllrb.com
[tpw]:    http://tom.preston-werner.com/
[jekyll-stats]: https://github.com/jekyll/jekyll/graphs/contributors
[docker]: https://docs.docker.com/
[grahamc_jekyll]: https://registry.hub.docker.com/u/grahamc/jekyll/
[pages]: https://pages.github.com/
[CNAME-file]: https://help.github.com/articles/adding-a-cname-file-to-your-repository/
[CNAME-record]: https://help.github.com/articles/tips-for-configuring-a-cname-record-with-your-dns-provider/
[6-static-blog-generators-arent-jekyll]: http://www.sitepoint.com/6-static-blog-generators-arent-jekyll/
[akafred-github-io]: http://github.com/akafred/akafred.github.io
[2nx7ping]: https://www.site24x7.com/ping-test.html
[clicky]: https://clicky.com/
[disqus]: https://disqus.com/
[clicky-commit]: https://github.com/akafred/akafred.github.io/commit/9d01a6f3b8bf66ef6ab356ec1aa82b944bac69c0
[disqus-commit]: https://github.com/akafred/akafred.github.io/commit/8e4e05e7a048c0ac150360fdcf4a233ad81889ca
