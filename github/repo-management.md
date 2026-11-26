---
title: Contributor Management
published_at: https://www.w3.org/guide/github/repo-management
toc: true
---

This document covers a tool that was created to support contributions made to a group, under the form of pull requests, in order to assess whether they are IPR-OK or not.

The tool is at: [https://labs.w3.org/repo-manager/](https://labs.w3.org/repo-manager/).

A number of operations in the tool require logging in through GitHub as the related actions you can undertake through the tool (or that the tool can undertake on your behalf when reacting to a GitHub event) require authorized access to GitHub.

There are several tools of use:

## New Repository

**<span class="tag">Login required</span>**

This is basically what people should use when they want to start a new specification in a CG or a WG. It gives you a choice of the organizations under which you are allowed to create a new repo (including your own user), and you can pick the name of the repo and the group(s) to which it belongs.

Hitting "Create" can take a little while as the tool does all of the following, live:

- Creates the repo on GitHub
- Adds several files, notably the `LICENSE` and `CONTRIBUTE.md`, a [`w3c.json`](w3c.json.md) file which can be used by other tools, and an `index.html` that's a bare-bones ReSpec spec ready to be edited.
- Adds a hook to the repo such that pull requests and comments on them are sent to us, including one distinct cryptographic secret per repo.
- Saves all the relevant info on our side.

Most users should only ever have to use that. Once done they can go and play in their repo.

## Import Repository 

**<span class="tag">Login required</span>**

This is the same as "New" but for an existing repo. It will **never** overwrite something there so it is the user's responsibility to check that the repo is okay.

## How Pull Requests Get Handled

Whenever a pull request is made against a repo that is under the tool's management,the tool gets notified. It uses this information to assess if the PR is acceptable (i.e. all its contributors have made the relevant IPR commitment).

Count as contributors not just the person making the pull request, but also anyone added either in the PR description or in any subsequent comment using "`+@username`" on a line on its own. If a contributor was added by mistake, they can be removed with "`-@username`" on a line on its own.

Every time a PR is created or has a comment with a username change, the status of the PR is changed. If it's okay it'll get changed to green with a note indicating that it's fine; if not it gets changed to some ugly brown with a red cross (and a link that people can use to check the issue in more detail).

On the page that explains the IPR failure, one can mark a given Pull Request as non-[substantive](https://www.w3.org/policies/process/#substantive-change): this will post a comment on the pull request under the name of the user, and will clear the flag for the said pull request.

When a pull request gets flagged as not OK by the tool, it will attempt to notify the GitHub users listed in the [`contacts`](w3c.json.md#contacts) property of the `w3c.json` file in the repo.

When it gets flagged as not OK because the contributor could not be automatically associated with a W3C profile, the contributor will also be notified to ask them to [connect their W3C &amp; GitHub accounts](https://www.w3.org/users/myprofile/connectedaccounts/).

## Currently Open Pull Requests

This list all PRs that are now open, even old ones. It lists useful details such as which users are being problematic either because they are unknown (not in the system at all) or outside (known to the system but not in one of the right groups for that repo).

You can go to PR details by clicking "Details".

## PR Details

If the PR is not in an acceptable state, this will list problematic users with possible options to fix each of them, and a button to "Mark the PR as non-[substantive](https://www.w3.org/policies/process/#substantive-change)".

The vast majority of non-acceptable PRs for a newly added repo will come from people whose W3C profile is not known (and thus neither are their affiliation and associated IPR commitments).

When all problematic users have had their W3C profile associated, return to the PR details page and hit "Revalidate". We hope in the future to [revalidate every time a user is added or edited](https://github.com/w3c/ash-nazg/issues/26). Revalidation will of course update both the local state and the PR's mergability indicator on GitHub.

## Active Last Week PRs

This is a list of pull requests, in any state, that saw activity last week. They can be filtered according to the affiliation of the companies that made the contributions. This is essentially so that AC reps who have people in CGs who are only supposed to contribute to some specific work but not all of it can monitor what's been going on and avail themselves of their 45 days retraction window. Similar affordances are available as for the list of open PRs.

## Edit User

**<span class="tag">Login required</span>**

In most cases, this interface will not be needed - it is only useful for cases where it is not possible or practical for a GitHub user to [associate their GitHub account with their W3C account](https://www.w3.org/users/myprofile/connectedaccounts/).

The interface to edit users is where the W3C data model and the GitHub data model get to meet. This alone is scary; I've tried to make it less scary.

A list of the groups known to the system is shown, the user can be added and removed from them there. If the user's affiliation is unset, once some groups have been added you can click "Set". This will load up a list that is the **intersection** of membership in the selected groups. The UI will also try to select the user with the name matching their GitHub profile (which may not always work, but often does). Hitting "OK" will associate the GitHub user with the W3C user, making it possible for us to use affiliation information. Don't forget to hit "Save".

## Users list

**<span class="tag">Admin required</span>**

This is the list of users availble from "Admin > Users". Things you can do there include making them admins and giving them blanket contribution rights. **USE EITHER WITH CARE**.

Admins should normally not be able to break the system, but they can enter all sorts of bogus information that would be really annoying. Only grant admin when you're sure; it's probably better to ask others first.

Blanket is a different type of superpower. Users with blanket access are considered acceptable contributors to ALL repos, irrespective of their group memberships. This should normally be restricted to W3C Team people.

## Groups list

**<span class="tag">Admin required</span>**

This is a list of all W3C groups availble from "Admin > Groups". You will note that most have an "Add" button next to them: those are the ones that are in W3C but not in this system. Please do **not** start adding groups unless they explicitly want to be managed under this system. We only want people to create/import repos for groups that are actually using this system. Clicking "Add" makes that group one of those available for repos and users to belong to.

The source is at [https://github.com/w3c/ash-nazg](https://github.com/w3c/ash-nazg).
