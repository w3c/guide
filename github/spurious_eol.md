GIT --
title: The "spurious EOL normalization" bug
toc: false
---


# Description of the bug

After
[applying suggested changes](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/incorporating-feedback-in-your-pull-request#applying-suggested-changes)
in a PR, and possibly after using the
[online editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor),
the PR appears to modify *all the lines* of a given file.
The change in most line is in fact only touching the end-of-line (EOL) character, changing all LFs to CRLFs.

## What causes the bug

It seems that the bug appears when the following conditions are met:

* the file contains a mix of CRLF and LF, and
* changes are commited to the file by 
  [applying suggested changes](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/incorporating-feedback-in-your-pull-request#applying-suggested-changes)
  or (TBC) using the
  [online editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor).

> [!Note]
> This behaviour is not a "normal" GIT behaviour:
> to reproduce it, one has to tweak the GIT configuration between the time the file is checked out and the time the file is commited!
> It seems more likely that it is a GitHUb bug.


# Dealing with it

* It is possible to ask GIT or github to ignore whitespaces when showing the difference between two versions of a file:

  + in github, by clicking on the cog-wheel button in the 'Files changed' view of the PR,
    and checking 'Hide whitespace' (alternatively: adds the `?w=1` parameter to the URL,
    [example](https://github.com/pchampin/test_eol_bug/pull/2/changes?w=1))

  + on the command line, using the `--ignore-all-space` option of `git diff`

  > [!Note]
  > Note that this does not *fix* anything; it only changes what is displayed as "changed lines". Further, it conceals changes in indentation which may increase or decrease the number of space characters used for indents, as well as changing indent characters between tabs and spaces. These remain to be manually fixed after resolving the EOL issue.

* Advanced users may "fix" the PR by

  + checkout the branch of the PR locally
  + modify the incriminated commit with [`git rebase -i`](https://git-scm.com/docs/git-rebase#_interactive_mode);
    a useful command to change all CRLFs back to LFs is `sed 's/\r$//' -i [filename]`
  + "force-push" the rebased branch with `git push --force`

  This will retain the individual commits with their authors and messages.

# Preventing it from happening again

A workaround consists in:

*  adding a
  [`.gitattributes`](https://git-scm.com/docs/gitattributes)
  file in the root folder of the repository, containing the following line:
  ```
  * text=auto
  ```

  This instructs GIT to guess which files are text files;
  any new file deemed to be text will be kept *in the repository*
  with EOLs normalized to LF,
  regardless of the EOLs in the local copies.

* optionally running `git add . --renormalize` followed by `git commit -m "normalize all EOL"`
  to ask GIT to remove all mixed EOL in text files already present in the repository.
  (Again, this will *not* change the local copies.)
