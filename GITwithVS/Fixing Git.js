// if you forgot to stage a file or wrong commit message
git add filename
git commit --amend
// this will popup a window where you can edit the commit
// the command amends prior commit

// unstaging a file 
git reset HEAD filename

//unmodifying a file 
git checkout --filename

git log --graph --oneline --decorate

/*
--graph prints ASCII tree representation of repo 
--oneline converts git commits into one one line for easy understanding
--decorate helps uniquely identify different components such as head, master, branches
and similar other stuffs*/

//how to create aliases to command
git config --global alias.glog "log --graph --oneline --decorate --all"

// Tagging is done to commit
full object 
name email, date, message
these are recommended way of tagging

lightweight tagging
comprises of pointer to commit, no metadata 

// view tag 
git tag // the line will tell all the tags that you are having  


//-a for annotated tag 

//example
git tag -a v1.5 -m "" //v1.5 is tag name; -m for message tag 

// by default tags are annotated

//-lw for lightweight tag 
// example
git tag v1.5 -lw // is the name of tag; lightweight tag only takes title;
// the lightweight tag takes the current commit 

// tagging a previous commit 
git tag -a v1.3 -m 'version 1.3' 9fceb02 //9fceb02 is snippet of full commit hash; snippet 
// should contain a minimum of 5 characters from 40 character hash for commit 

//Sharing tag

// push a specific tag
git push [remote] [tagname]

// push all tags
git push [remote] --tags

// Even more git
Cherry-pick
capture delta of commit and apply to another branch with a new commit

git cherry-pick <commit-name> <branch-name>

//example
git checkout master
git cherry-pick c90fd66
git log

//bisect 
git bisect start
git bisect good <working commit> // point uptil everything was good
git bisect bad <non-working commit>// end point when you realized things went bad

// what this does is it will keep on bisecting till the point we have bad commit
stash
// a way to switch branches without committing work
git stash
git stash list
git stash pop 
git stash branch <branch-name>

revert
// creates a new commit
// undoes changes from previous commit
// adds a new history
// doesn't modify existing history 

git revert <commit>

reset
git reset <file>
git reset 
git reset --hard //undoes changes permanently
git reset <commit>

reset vs revert
reverting safely undoes public commit 
resetting undoes local changes permanent

