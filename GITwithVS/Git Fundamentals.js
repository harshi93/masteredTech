// Git Fundamentals Part 1

//initialize the repository
 git init 

// Lifecycle of a file during Git Operations

 /*Any file is initially in untracked stage the momen we add file it is in 
 unmodified stage the next moment when we edit file it goes into modified stage
 followed by when we stage the file it goes into staged stage
 
 Once the file is staged it is ready for commit and once we commit the file
 it goes into unmodified stage followed by when we remove the file it goes into 
 untracked stage  */

 // determine the state file
 git status 

// list of ignore file while pushing 
.gitignore

// stage all files in the folder 
git add -A

// changes added to commit
git commit -a 

// to discard changes 
git checkout --filename 

// to remove files from staging area
git rm --cached .\filename

// creating branches in git
git branch testing // the line will create a branch named testing

// switching branches in git 
git checkout testing // the will cause head pointer to start point testing 

// note the head pointer points to users current location
// in git we do checkout in same directory unlike in TFS or subversion
// when we create a branch at that point of time both master and branch point to same commit
// branch is lightweight movable pointer to commit which moves with every commit
// master/branch is a file with hash of commit; the master points to commit which points to snapshot
// the file contains 40 characters
// the branch/master whichever one is checked out will be the one that will do the commmit 
// and the one that is doing the commit is the one which will move and other one will stay wherever
// it was left

// the command will visualize the commit 
git log --oneline --graph --decorate --all

// GUI for above
gitk --all 

// to see all branches 
git branch 

// use notepad to create files
// if you don't do stage and commit the newly created file what will happen is the file will
// exist in both branches

// use it to explain and understand branching, and merging
//pcottle.github.io/learnGitBranching/?NODEMO

// Create and checkout a branch
git checkout -b branchname

//in order to do merge any files with master
// you go back to master from any other location using
git checkout master

// then you merge the branch you want to merge with master
git merge branchname

// deleting a branch is done using 
git branch -d hotfix// hotfix is the name of branch

// in order to skip the staging step what we can do is use command
// the command only works for file which already being tracked by git
git commit -am "skip staging, add changes and commit"

// merging 
git merge branchname //that is to be merged with master

// speaking of recursive merge; in recursive merge the pointer at
// master goes looking for common ancestor between master and the branch that is to be
// merged and once it finds common ancestor it does the merging; also note in certain 
// cases where there are multiple parents leading to same branch git will create a 
// temporary parent connecting those parents and then use the temporary parent as 
// common ancestor 

// remote branch
git remote add name1 serveraddressofrepo// name1 is binded to serveraddressofrepo
git fetch name1 // git fetch only fetches content and not merge unlink git pull

// in order to push files to a common repo 
git push remote branch // remote here is the name of local repository and branch 
// the place where we want to push our content

// the line will push all the history and contents to the repository
git push -u nameofthebranch --all 

// track other remotes and branches
git checkout -b [branch] [remotename]/[branch]

// rebasing

// never rebase commits that have been pushed to public repo
// simple way to rewrite history
// it's simple find common ancestor find diffs and save diffs to a temp file
// reset current branch to rebase branch and apply diff to each branch

// rebasing is mostly done to achieve linear history

// example

git rebase --onto master server client

// the command says find server first because
// since client was based off server we want to 
// find common ancestor between server and client
// prior to finding diffs and replaying them on top
// of master

git checkout master
git merge client
git rebase master server

// post above then delete branches

git checkout -b newBranch
notepad foo.txt
git add
git commit -am ""
notepad .\foo.txt
git commit -am ""
git checkout master
notepad .\index.html
gitk --all

// rebasing type 1
git rebase master newBranch
git checkout master
git merge newBranch
gitk --all

// rebasing type 2
git rebase -i master newBranch
//make changes and exit out
// once you exit out there will be a prompt if you want to rewrite the commit
gitk --all
