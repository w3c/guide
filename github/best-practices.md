---
title: Best practices and recommended tools
toc: true
---

## For all GitHub users {#all}

### Enable two-factor authentication (2FA) {#mfa}

[Two-factor authentication, or 2FA](https://help.github.com/articles/about-two-factor-authentication/), is an extra layer of security used when logging into websites or apps to protect your online identity. With 2FA, you have to log in with your username and password and provide another form of authentication that only you know or have access to. We encourage all users to enable 2FA in as many services and applications as they use for which this feature is available — starting with GitHub.

You can set it up here: [`github.com/settings/security`](https://github.com/settings/security).

### Own your code {#own}

The repositories you contribute to should ideally have a file [`.github/CODEOWNERS`](https://help.github.com/articles/about-codeowners/). If that is so, suggest to the maintainer edits to that file so that you will be automatically assigned PR reviews for those PR's that will affect the areas or files that you “own” (ie, that you are usually responsible for).

(If that file is missing, point the maintainer of the repository to these two sections: [*§ settings*](#settings) and [*§ GitHub boilerplate files*](#boilerplate).)

### Submit atomic PR's {#atomic}

Your PR's should tend to be small, and contain *one* bugfix or new feature only.

### Make sure you receive notifications {#notifications}

It is recommended that all users automatically subscribe to [notifications](https://help.github.com/articles/managing-your-notifications/) from new W3C repositories. If/when a new repository is of no interest to them, the user can easily unsubscribe from it.

The “danger” of missing important notifications if one does not subscribe to all of them is higher than the slight annoyance of having to manually unsubscribe from (most) new repositories every time.

Users can choose whether to receive those notifications via e-mail, as alerts on the web UI of GH, or in both ways at the same time.

Set up automatic watching of new repositories here: [`github.com/settings/notifications`](https://github.com/settings/notifications). If you receive too much noise, prune the list of repositories that you watch here: [`github.com/watching`](https://github.com/watching).

**Repository maintainers should *always* watch their repositories** and respond to changes, issues, PRs, etc.

### Delete your branches soon {#branches}

Branches you create to submit PRs should be deleted as soon as the PR is resolved (either merged or closed for other reasons). Make a point of deleting a branch when you see its corresponding PR has been merged.

To remove old branches from your clone of the repo, run this Git command from time to time:

```
$ git remote prune origin
```

## For project maintainers {#maintainers}

### Set up the repository well {#setup}

#### Set common settings {#settings}

Review `https://github.com/w3c/<REPO>/settings`:

- Does your project use **wikis** or **projects**? If not, disabling those options will reduce some cognitive load, un-clutter the web UI, and prevent absent-minded collaborators from contributing wiki pages or other stuff that nobody is using nor paying attention to.
- Set up **GitHub Pages** if necessary; select the right branch for that.
- In `https://github.com/w3c/<REPO>/settings/branches`:
  
  - Make sure the **default branch** is `main` or `gh-pages`.
  - Consider [enforcing code reviews for PR's](https://help.github.com/articles/enabling-required-reviews-for-pull-requests/), at least for the default branch.
- In `https://github.com/w3c/<REPO>/settings/installations`, under *Services*, you may want to add a handy **service**; like an IRC notifier, or a Twitter bridge (depending on the nature of your repository, of course).

#### Fill in common fields {#fields}

In particular, the three fields that appear at the top of the main page of the repo: **description** (something short), **website** (often pointing to GitHub Pages) and **topics** (tags).

Check out how those are set up [in Echidna](https://github.com/w3c/echidna), for example.

### Include sufficient metadata {#metadata}

#### Git special files {#git}

Have a [`.gitignore`](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) (hidden file) in the root directory of your repo to list files and directories that you do *not* want to keep under version control. Typically something along the lines of:

```
node_modules/
npm-debug.log
logs/
```

See [an example](https://github.com/w3c/validate-repos/blob/main/.gitignore).

Ideally, **this file should *not* contain filenames or patterns that are associated to specific OS's, IDE's or editors**; eg `.DS_Store` (MacOS), `Thumbs.db` (Windows), `*~` (emacs). The other contributors don't need to know about the different types of droppings your tools produce, and there are cleaner ways to ignore files *locally*, like [configuring your Git to do so](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreexcludesFile).

#### GitHub boilerplate files {#boilerplate}

To keep the root directory of the repository clean and manageable, store as many metadata files under `.github/` as possible. You should certainly have a [`README.md`](https://help.github.com/articles/about-readmes/) there.

Other useful files you may want to keep under that directory are these (in decreasing order of importance):

- [`CONTRIBUTING.md`](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
- [`ISSUE_TEMPLATE.md` and `PULL_REQUEST_TEMPLATE.md`](https://help.github.com/articles/about-issue-and-pull-request-templates/)
- [`CODEOWNERS`](https://help.github.com/articles/about-codeowners/)
- [`CODE_OF_CONDUCT.md`](https://help.github.com/articles/adding-a-code-of-conduct-to-your-project/)

An exception to this rule is the file [`LICENSE.md`](https://help.github.com/articles/adding-a-license-to-a-repository/), which should be in the root directory of the project, [or else GitHub will not find it](https://github.com/benbalter/licensee/issues/250#issuecomment-353985847).

See [an example](https://github.com/w3c/validate-repos/blob/main/LICENSE.md).

If these files do not exist GitHub will use the [default
community health
files](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file),
for example our [default code of conduct](https://github.com/w3c/.github/blob/main/CODE_OF_CONDUCT.md).

#### W3C-specific metadata {#w3c}

Usually applicable only to repositories containing specs (*not* software).

See [the `w3c.json` file](w3c.json.md).

### Handle permissions well {#perms}

Make sure you list the right *teams* and *individuals* under “Collaborators & teams”:

```
https://github.com/w3c/<REPO>/settings/collaboration
```

In particular, be conservative about assigning editing (write) permissions and do so only for known collaborators.

### Make sure you receive vulnerability alerts {#vulns}

Usually applicable only to repositories containing software (*not* specs), and assuming the language/platform detected in the repository is understood and supported by GitHub; find out [in their help pages](https://help.github.com/articles/about-security-alerts-for-vulnerable-dependencies/).

Enable vulnerability alerts in settings, here:

```
https://github.com/w3c/<REPO>/settings#vulnerability-alerts-feature
```

Once enabled, vulnerabilities will be shown highlighted in two places:

- At the top of the main page of the repo; ie `https://github.com/w3c/<REPO>`
- On the *Dependency Graph* page; ie `https://github.com/w3c/<REPO>/network/dependencies`

Finally, make sure you are receiving *notifications* about vulnerability alerts: [`github.com/settings/notifications`](https://github.com/settings/notifications) (bottom of the page).

### Set up CI {#ci}

[Travis CI](https://travis-ci.com/) is our recommended tool to do CI; check out [our repos there](https://travis-ci.org/w3c/).

A particular example of Travis configuration (see links below for more information):

```yaml
language: node_js
node_js:                            # ☞ “Building a JavaScript and Node.js project”
  - "8"
  - "10"
before_install:                     # ☞ “Build Stages”
  - npm install -g npm@latest
before_script:
  - cp config.js.example config.js
script:
  - npm run build
after_script:
  - npm run coveralls
notifications:                      # ☞ “Configuring Build Notifications”
  email: false
  irc:
    channels:
      - "irc.w3.org#pub"
    skip_join: true
    template:
      - "%{branch} by %{author} (%{build_url}): %{message}"
```

Travis CI help pages referenced above:

- [Building a JavaScript and Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
- [Build Stages](https://docs.travis-ci.com/user/build-stages/)
- [Configuring Build Notifications](https://docs.travis-ci.com/user/notifications/)

See [an example of Travis report page](https://travis-ci.org/w3c/echidna).

The specifics of Travis configuration depend greatly on the language/platform and on the dependencies and tools involved. See [the documentation](https://docs.travis-ci.com/) or browse existing repositories using Travis to learn more.

### Set up Repository Manager {#repository-manager}

(Applicable only to repositories containing specs, *not* software.)

You may want to add your new repository containing a spec in the [W3C Repository Manager](https://labs.w3.org/repo-manager/). This is a tool that helps with IPR managements from public contributors; check with the Systeam if in doubt.

### Patrol branches often {#branches2}

See also [Delete your branches soon](#branches).

From time to time, check the list of all branches in the project, `https://github.com/w3c/<REPO>/branches/all`, and delete the ones that aren't being used; branches that are *not* ahead of the default branch, and branches associated to PRs that are either *merged* or *closed* already, are definitely good candidates for removal. If in doubt, ask the author of the branch.

### Assess the quality of your repo {#tools}

From time to time, run tools like these to evaluate how well your repositories are maintained, and whether they are outdated or missing some metadata or files:

- [`validate-repos`](https://github.com/w3c/validate-repos): a W3C tool, specific for repos containing specs (*not* software); see [the kind of report it produces](https://w3c.github.io/validate-repos/report.html)
- [`forkability`](https://github.com/basicallydan/forkability/): an external project, useful for any kind of public repository with open source

## See also {#also}

- GitHub:
  - datree: [“Top 10 GitHub Best Practices”](https://www.datree.io/resources/github-best-practices)
  - Web Platform Tests: [“Introduction to GitHub”](https://web-platform-tests.org/writing-tests/github-intro.html)
  - i18n activity: [“Github guidelines for working with i18n documents”](https://w3c.github.io/i18n-activity/guidelines/github)
- Git: [Git recipes & tricks](git.md)
- Node.js: [best practices, recommended tools and template projects](https://github.com/w3c/nodejs) (public repo).
