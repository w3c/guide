---
title: Git recipes & tricks
published_at: https://www.w3.org/guide/github/git
toc: true
---

These are some **low-level tips for the console**, for *power users* of Git.

## Useful config {#config}

- `branch.autosetuprebase=always` ([documentation](https://git-scm.com/docs/git-config#git-config-branchautoSetupRebase)): I find it easier to work with Git this way
- `core.editor=emacs -nw` ([documentation](https://git-scm.com/docs/git-config#git-config-coreeditor)): that's the editor that will be invoked every time Git needs to ask you about a commit message, when you're squashing commits, etc (and of course, you want emacs for that)
- `commit.gpgsign=true` ([documentation](https://git-scm.com/docs/git-config#git-config-commitgpgSign)) and `gpg.program=gpg2` ([documentation](https://git-scm.com/docs/git-config#git-config-gpgprogram)): you will need to set up these variables (and possibly a couple other) if you want to [sign your commits to GitHub using GPG (recommended)](https://help.github.com/articles/signing-commits-with-gpg/)

## Safest way to “update” a local copy {#update}

I find this sequence of commands the “safest” way to quickly “refresh” a clone of some remote repo, and at the same time check its status (where “safest” means *“reducing to the minimum the probability of messing up things with conflicts, outdated branches, uncommitted changes, etc”*):

```shell
$ git branch -a
$ git pull -r
$ git status
$ git remote prune origin --dry
```

- `git branch -a` displays information about *all* branches, both local and *remote*
- `git pull -r` fetches changes from the *remote* and [“rebases the current branch on top of the upstream branch after fetching”](https://git-scm.com/docs/git-pull#git-pull--r)
- `git status` shows you the status of your copy: whether there are new files, missing files, unstaged changes, or commits pending push
- `git remote prune origin --dry` tells you if any branch in the *remote* has been recently removed. (Submit the same command *without* the `--dry` part to actually remove those remotes from your local `origin`. That will still *not* remove local branches automatically, but you can do that yourself with `git branch -d <BRANCH>` if you see some branch is no longer necessary.)

You can have those four lines as an *alias*, or inside a *script* somewhere.

Even better: if you set up [the aliases suggested above](#aliases), the whole thing becomes:

```shell
$ git br -a;git pl -r;git st;git re prune origin --dry
```

You can then type it and run it just once, and, from that moment on, simply recover the line from your shell history.

For example, if you're using Bash: press `Ctrl`+`r`, then start typing a distinctive chunk of the line (eg, `r;`, or `st;gi`); if you used it not too long ago for the last time, the entire line should appear, and you can simply press `Enter`.

## An alias to view the history of the repo {#lg}

```shell
alias.lg=log --graph --abbrev-commit --decorate --date=relative \
--format=format:'%C(bold blue)%h%C(reset)          \
- %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) \
%C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
```

Then, simply type

```shell
$ git lg
```

for a colourful graph of commits, tags and branches.

## See also {#also}

- Git:
  
  - [Official Git reference](https://git-scm.com/docs)
  - [*The* Git book online](https://git-scm.com/book/en/v2)
  - CSS WG wiki: [“Quick Guide to Using Git”](https://wiki.csswg.org/tools/git)
  - Out there: [“Flight rules for Git”](https://github.com/k88hudson/git-flight-rules)
- GitHub: [best practices and recommended tools](best-practices.md)
