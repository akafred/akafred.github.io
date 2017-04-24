---
layout: post
title:  "Getting better at git - in 5 lessons"
dek:    "Learning git using great stuff on the web"
lede:   "Is git occasionally (or often) a mystery to you? - You are not alone! I have pulled in a few hand picked resources, in this post you get the first few bite-sized lessons."
image:
  feature: 3151544292_4516e65a3a_z.jpg
  title: "\"Git\" (cropped)"
  titlelink: https://www.flickr.com/photos/stevensnodgrass/3151544292
  credit: Steve Snodgrass
  creditlink: https://www.flickr.com/people/stevensnodgrass/
  license: CC BY 2.0
  licenselink: https://creativecommons.org/licenses/by/2.0
date:   2016-05-29 21:00:00
update: 2017-04-24 21:05:00
categories: git dvcs
---
A former client adopted git recently and not everyone there knew distributed version control all that well. To bring them up to speed I created a set of small "lessons" pointing to good resources. After a few lessons I promise that you will have fewer git-induced headaches.

Each lesson typically contains a link to a video, a blog post, or something similar. There will be content for all levels, both beginners and those more experienced. I even think the odd expert might find a tip or two.

## Lesson 1 - What is git?

First lesson is very basic (but short) and if you have used git more than a little you can skip this, but stick around for lesson 2.

The video is by Matthew McCullough from GitHub.

[What is Git? (Git-SCM) • Git Basics #2 (Vimeo, 8,5 mins) https://vimeo.com/41381741](https://vimeo.com/41381741)

### Themes in Lesson 1:

* What's the point of version control?
* What does it mean that git is 'distributed'?
* A few examples of basic and more advanced use

## Lesson 2 - Understanding Git

This lesson is presented by a slightly hung over Steve Smith from Atlasssian. The talk was held at the Devoxx conference in Antwerp in November 2015.

Steve will help you understand the underlying concepts of git. Some of this could be regarded as implementation details, but understanding these concepts will help you a lot.

The video takes about 45 minsutes to watch, and more to digest. If you find the topics too complicated, I promise we will approach these subjects later, from different angles.

[(Getting out of trouble by) Understanding Git by Steve Smith (YouTube, 47 mins) https://youtu.be/sevc6668cQ0 ](https://youtu.be/sevc6668cQ0)

### Themes in lesson 2

* Fundamental data structure: commit, tree, blob
* HEAD, refs, tags
* `reset`, `reflog`, `gc`, packing
* Merge, fast-forward, `rebase`
* Merge strategies
* `rebase --exec`
* `bisect`

## Lesson 3 - RTFM

A slightly provocative title (with a touch of 1337; RTFM = Read the f *** ing manual!).

But sometimes that can be a great tip. In git's case is manual is fairly well-written. I have opted to show you a manual page that isn't too action-packed, let still has a few surprises: `git add`

[git-add Documentation - Add file contents to the index (read: 10 mins, try: xx mins, understand: _a lifetime_ …) https://git-scm.com/docs/git-add ](https://git-scm.com/docs/git-add)

### The goals of this lesson:
1) You should know `git add` better, and
2) be more familiar with the f… manual …

Here are some arguments (to `git add`), ordered by how important *I* think they are:

* `--update` or `-u`
* `--patch` or `-p`
* To specify multiple files with `dir` (i.e. names of directory with the changed files)
* To specify multiple files `file1 file2`
* Specifying files with globs: `*.md`
* `--all` or `-A`
* `--interactive` or` -i` (but rarely use this after I learned `--patch`)

## Lesson 4 - Git from the Bottom Up

There are several open source books on git. The best known is probably Pro Git, which you can [download as an eBook or read online](http://git-scm.com/book/en/v2).

However, for this lesson you only need to read the introduction from another open source book on git: _Git from the Bottom Up_. The first page contains definitions of the key terms you should know to read all other git documentation. Since we have already dug quite a bit deeper than this I suggest you use this as a checklist of terms you should be familiar with.

[Git from the Bottom Up - Introduction (read: 5 mins) https://jwiegley.github.io/git-from-the-bottom-up/](https://jwiegley.github.io/git-from-the-bottom-up/)

### After this you should be able to explain:

* repository
* index
* Working tree
* commit
* branch
* tag
* master
* HEAD
* Relationship between repository, index and working tree

## Lesson 5 - git cheat sheets

git has _many_ commands - about 80 last I checked. In addition to the built-in ones you can create your own too. Some commands you will probably never use. E.g. try `git help bundle` and read up on how git works over "sneaker net".

There are many "cheat sheets" to help you find the more popular git commands. Cheat sheets are nice to have when you're new, but also good to use as check lists when you are more experienced.

I have included links to a few different ones below.

[GitHub Git Cheat Sheet - (read: 10 mins) https://services.github.com/resources/](https://services.github.com/resources/)

[Git Data Transport Commands - (study: 5 mins) http://assets.osteele.com/images/2008/git-transport.png](http://assets.osteele.com/images/2008/git-transport.png)

[Git Cheat Sheet (by Zack Rusin) (PDF) - (read: 10 mins) https://jan-krueger.net/wordpress/wp-content/uploads/2007/09/git-cheat-sheet.pdf](https://jan-krueger.net/wordpress/wp-content/uploads/2007/09/git-cheat-sheet.pdf)

This one is interactive:
[Git Cheatsheet (by NDP Software) http://ndpsoftware.com/git-cheatsheet.html](http://ndpsoftware.com/git-cheatsheet.html)

After this lesson, you should know which git-commands are the most used, and might also have picked up some new ones to learn.
