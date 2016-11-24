// The Do's and Dont's of 

// Do's 
/*Read about git
write meaningful, understandable commit messages
set up your gitconfig
ensure that each issue you are working on has a local branch that is separate from master
do choose a common workflow; half doing this half doing that in the end will only going
to make things look ugly*/

//Dont's

/*do not rebase public commit
do not delete unmerged remote branches
don't have more than 1 project per repo
don't create large repo
don't panic*/

// Remote repository
/* remote repos can either be on internet or on network
One can have multiple remote which can either be read-only or
read-write. Remote repos can be added deleted or branched;
remote can are used for team collaboration and to enable 
different workflows by pulling from multiple location and pushing
to integration repository*/


git remote add [nickname] [url to repo]

// fetch can be run on the shortname

//pulls data to local repo doesn't auto-merge must manually merge'
git fetch nickname

//does a fetch first merges remote into current branch
git pull nickname

// branch would be [shortname]/[branchname]
nickname/master

// pushing to remote
git push nickname master

// pushing to origin's master branch
git push origin master

// push can be rejected if there are changes on server that haven't been pulled

//remove remote
git remote rm[shortname] 

// rename remotes
git remote rename [oldname] [newname]

//Collaboration workflow
//in collaboration workflow every developer contributes to single shared repo

//Integration-Manager Workflow
/*every developer pulls content from shared repo push content to it's own private repo
and integration manager pulls content from developer public repo and further if they 
integration manager likes content he then pushes content to blessed repository*/

//Dictator-Lieutenant workflow
/*in dictator-lieutant workflow; developer sends code to lieutant; if lieutant likes it ;
he pushes to the code to his repo from where dictator grabs the code who will then 
further integrate stuffs and push it to blessed repo, the workflow is mostly used 
when there are more than 100 devs or more*/

//Contribution Workflow
/*the contribution workflow says that create branches per feature; that is to says
create branch for any feature that you might be working on then push that branch to your
public repo keep developing in that branch unless done. Once done merge the branch with
master; why do so, it will help integration manager pull content from one single repo
also it will prevent any fatal damage that may be caused to your repo due to corrupted
programs */ 