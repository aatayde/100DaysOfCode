# Day 93 | Git Good

[1]: https://git-scm.com/

> [Git][1] Free open source distributed version control system, fast & efficient

## [Reference](https://git-scm.com/docs)

1. [git conf](#git-config)
1. [git init](#git-init)
1. [git clone](#git-clone)
1. [git add](#git-add)
1. [git status](#git-status)
1. [git commit](#git-commit)
1. [git reset](#git-reset)
1. [git branch](#git-branch)
1. [git checkout](#git-checkout)
1. [git stash](#git-stash)
1. [git fetch](#git-fetch)
1. [git merge](#git-merge)
1. [git log](#git-log)
1. [git pull](#git-pull)
1. [git push](#git-push)
1. [git remote](#git-remote)
1. [git revert](#git-revert)
1. [git rebase](#git-rebase)
1. [git bisect](#git-bisect)
1. [git clean](#git-clean)

## [git config](https://git-scm.com/docs/git-config)

get & set repository or global options

`git config --global alias.ac "commit -am"`

create a global alias when to shortening the commit command with the -am flag

## [git init](https://git-scm.com/docs/git-init)

`git init`

creates an empty repository with a .git directory with sub directories that handles refs/heads, refs/tags, and template files.

its safe to run if you already have an existing repository, does not overwrite anything.

`rm -rf .git`

delete github directory

## [git clone](https://git-scm.com/docs/git-clone)

`git clone https://example.com/`

clone a repository into a new directory, creates remote branch for each branch in the cloned repository, and creates & checks out an initial branch that is forked from the cloned repository

## [git add](https://git-scm.com/docs/git-add)

include or stage files to the repository

## [git status](https://git-scm.com/docs/git-status)

`git status`

show the working tree/branch status

## [git commit](https://git-scm.com/docs/git-commit)

`git commit -m "add index.html file`

create a snapshot of the current state.
changes made are at the head of the branch.

`git commit -am "twas was easy"`

create snapshot and add staged changes in one line

`git commit --amend -m "that was easy"`

update the latest commit comment

`git add .`

`git commit --amend --no-edit`

add files to last commit without changing the comment "only works if code hasn't been pushed to a remote repository"

`git commit --fixup dc3f420`

`git commit --squash fd3d69`

tell git in advance that you would like to squash them when running rebase autosquash

## [git reset](https://git-scm.com/docs/git-reset)

`git fetch origin`

`git reset --hard origin/main`

over ride local code with the remote code, "local changes will be lost forever"

## [git branch](https://git-scm.com/docs/git-branch)

`git branch`

lists the branches in the repository

`git branch -M Mucho`

changes the current branch name

## [git checkout](https://git-scm.com/docs/git-checkout)

`git checkout branch-2`

changes to another branch

`git checkout -b branch-3`

create a branch & move to that branch

`git checkout -`

changes branch to the previous branch without entering the name of the branch

## [git merge](https://git-scm.com/docs/git-merge)

`git merge branch-3`

merges the current branch you are on to the head of another branch

## [git log](https://git-scm.com/docs/git-log)

`git log`

show history of commits

`git log --graph --oneline --decorate`

see concise & easy to read history of commits

## [git stash](https://git-scm.com/docs/git-stash)

`git stash`

stash the changes in a dirty working directory away

`git pop`

when you're ready to add the changes back to your code

`git stash save stuff`

saves stash by name to be referenced later

`git stash list`

lists the referenced stashes

`git stash apply 0`

use the index of the referenced stash in the list to use the saved stash

## [git fetch](https://git-scm.com/docs/git-fetch)

`git fetch origin`

get the most up to date commits in a repository

## [git pull](https://git-scm.com/docs/git-pull)

`git pull`

fetch from & integrate with another repository or a local branch

## [git push](https://git-scm.com/docs/git-push)

`git push origin main --force`

overwrite remote commit with the state of the local code "if there is commits on the remote branch that you don't have, code will be lost forever"

## [git remote](https://git-scm.com/docs/git-remote)

manage set of tracked repositories

`git remote add origin https://example.com`

## [git revert](https://git-scm.com/docs/git-revert)

`git revert better-code`

undo a commit with a new commit
take one commit and go back to the commit that was set previously

## [git rebase](https://git-scm.com/docs/git-rebase)

`git rebase`

reapply commits on top of another base tip

`git rebase -i --autosquash`

## [git bisect](https://git-scm.com/docs/git-bisect)

use binary search to find the commit that introduced a bug

`git bisect stat`

`git bisect bad`

`git bisect good 6d01fd`

## [git clean](https://git-scm.com/docs/git-clean)

remove untracked files from the worked tree

`git clean -df`

remove unstaged files & artifacts
