---
title: FAQ
toc: true
---

[Git](https://git-scm.com/) is a popular, open-source distributed version control system, commonly used with [GitHub](https://github.com/) as a convenient central host of repositories, along with wiki documentation, pull request management and issue tracking. Several W3C groups are using GitHub infrastructure for specification and test authoring workflows. Below we include some suggested steps for getting started and answers to some frequently asked questions about using GitHub for W3C spec work.

## Getting started {#starting}

### Informal drafts in your personal account {#drafts}

Getting started individually obviously doesn't require any approval process. Create an informal draft (using ReSpec makes it easy) by starting a new repository with your personal GitHub account. We strongly recommend one repository per document, unless you really know why you're doing it differently.

You can just publish HTML as you normally would simply by setting up [GitHub Pages](https://github.com/blog/2228-simpler-github-pages-publishing) to use the default branch, `main`.

⚠️ **NB:** [GitHub Pages can serve content off of *one branch and one directory only*](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) — if your repo is hosting different specs, or different versions of the same spec, you will have to either cram all those documents into that branch/directory (and adapt your workflow around that file structure) or serve your pages in a different way (eg, setting your own web server or [using some kind of hosting provider](#others)).

### Hosting a repository within the `w3c` organization {#repos}

W3C projects include W3C staff selected projects as well as W3C Working (Interest) Group projects. It is possible that we decide to assess other group's requests to host a given repository. In any case, a prerequisite would be identifying the owner(s) either by name or by e-mail address. Refer to [the Guidebook for Community Groups](https://www.w3.org/2016/04/cg-support/#what) for more information.

1. Your Staff Contact should become (if they're not already) a part of the [Owners Team](https://github.com/organizations/w3c/settings/owners) of the W3C organization. (Ask any of the current owners directly, or ask on &sysreq. This is only for W3C Staff.)
1. If there is no GitHub team roughly matching the group that will be pushing to that repository, the Staff Contact should create a new team for the editors who will be contributing to the document, and give that team push and pull access.
1. W3C staff (or Staff Contacts of the group) create a new repository for each document (each deliverable, it can of course contain multiple resources). Add each such repository to the GitHub team so that the contributors all have push access. Other people can suggest changes by submitting pull requests (in fact, editors can do that too to enable reviewing before commits, if desired), but not every contributor will be given direct commit access.

### Detailed steps for staff contacts to create a repo {#steps}

**The preferred way to create new repositories is by using the [W3C Repository Manager](https://labs.w3.org/repo-manager/), in particular this page: [`labs.w3.org/repo-manager/repo/new`](https://labs.w3.org/repo-manager/repo/new).**

Follow the instructions below only if for some reason you can't use the W3C Repository Manager for this.

1. Let's say you're working on the unicorn spec. You head to [https://github.com/new](https://github.com/new) (which is linked as "New repository" from the home page). Under Owner you pick "w3c" (which you should have access to, if not ask someone on IRC) and under repo name you pick "unicorn". Enter a description, keep it public, initialise with a README, don't pick a .gitignore or a license.
1. If you need to create a new team, go to [https://github.com/organizations/w3c/teams/new](https://github.com/organizations/w3c/teams/new). Give the team a name ("Unicorn Editors") and grant them "Push & Pull" (no need for admin). Save the team. Under "Members", just start typing the user names for the editors, you'll get a drop down suggesting people. Once you've added them all, under repository start typing "unicorn" and you should see w3c/unicorn listed. Pick that.
1. That will give you a `https://github.com/w3c/unicorn` with fully configured access.

## W3C integration {#integration}

### GitHub and W3C mailing lists {#mail}

To have notification to the mail list at opening of new bugs/issues and modification of existing ones from GitHub, you may use the [github notification solution](https://github.com/dontcallmedom/github-notify-ml/) designed by Dominique Hazael-Massieux.

### Contributor management {#contributors}

If you wish to accept pull requests from potentially arbitrary contributors but you need to ensure that they have signed up to the IPR terms, see the [Contributor Management](repo-management.md) section.

## Policy {#policy}

### How do we ensure archiving of work done on GitHub? {#archiving}

As usual, publication of Working Drafts and Recommendations into w3.org/TR/ will be done by your Group by copying snapshots which satisfy pubrules into the appropriate space, with W3C-guaranteed archiving.

Because Git itself decentralises archiving of every change (every user clones all history), backups of version history of Git repositories are straightforward (since in fact every user of the repository has a backup). W3C also provides a way to fully backup a GitHub organization and all its repositories (see the [GitHub backups section](backup.md)).

Also, the [Pheme](https://github.com/w3c/pheme) system gathers events (issues, wikis, pull requests, etc.) from the W3C repositories. A Pheme instance is currently [running in beta](https://labs.w3.org/pheme/); and some of the recent events can be viewed in the [Midgard instance](https://labs.w3.org/midgard/). The full data can be made exploitable as it is all sorted and indexable.

### May I use w3.org-hosted CVS or Mercurial instead? {#alternatives}

No. Those are old services that are being deprecated.

### What about serving specs using a third-party tool? {#others}

It is best to avoid these services and to either keep all documents that need to be displayed as web pages in the branch that GitHub Pages is serving, set up a proper web server, or use a hosting provider.

In the past, some groups used [RawGit](https://rawgit.com/) to serve their HTML documents with the appropriate MIME type, and from more than one branch (because of [these limitations of GitHub Pages](#drafts)). That service (RawGit) is now defunct.

Nowadays, if you absolutely need such a service, we would probably suggest the following options  — with the caveat that *it is just a recommendation that comes with no support nor guarantee*, since we do *not* control these services:

- [raw.githack.com](https://raw.githack.com/). The UI of this service gives you URLs for production (1 year cache, no traffic limit) and development (changes reflected within minutes, low-traffic only) you can use depending on your needs. **Note**: this service does warn that excessive traffic to development URLs will be throttled, so use it with caution.

The reason to opt for the services above is that others, like [HTMLPreview](https://htmlpreview.github.io/), either rely on client-side JavaScript to generate the page dynamically, are limited to GH repositories only, or alter the pages or the links within them in some way.

### Will the W3C host an instance of RawGit or a similar service? {#host}

No, the Systems Team is *not* planning to offer a similar service in the foreseeable future.

### Should we use GitHub for issue management too? {#issues}

Issue-management tooling is entirely up to groups to choose. That being said, the same notes apply as for the previous question: if you wish to communicate with a broader community, GitHub is usually the better option.

### How do we manage IPR with specs authored on GitHub? {#ipr}

In general, in the same way as for any other contribution intake mechanism. GitHub only tends to be singled out because it often leads to more contributions.

See [Contributor Management](repo-management.md) for a tool that is available to automate that process.

### What shall I do about trolls and spam on GitHub? {#trolls}

GitHub staff are usually quick to respond to spam or uncivic behaviour on their platform. When a particular GitHub account is repeatedly causing trouble in a W3C repository, a good first step is to **report the account** to GitHub. To do so, go to that user's profile page (eg, `https://github.com/supertroll`), click “Block or report user”, and then “Report abuse”. If after a while the account is not suspended by GitHub and spam persists, it is possible to **block the account** to prevent all interaction with the repository in the future. ([Write W3C's sysreq](mailto:sysreq@w3.org) if you don't have permissions to block the account yourself.)
