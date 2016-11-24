// for windows

// Download from website
http://git-scm.com/download/windows

// Installing on Fedora dist
yum install git-core

// Installing on debian-based 
apt-get install git

// Installing on Mac

//Graphical installer from Google Code page
http://code.google.com/p/git-osx-installer

//via MacPorts
sudo port install git-core +svn +doc +bash_completion +gitweb

//Chocolatey

//it's an apt-get for windows 

// In Command Prompt
C:\> @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex
((new-objectnet.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET 
PATH=%PATH%;%systemdrive%\chocolatey\bin

//Posh-Git

//Set of PowerShell scripts for Git integration

//We need to install Posh-Git using chocolatey in command prompt which can be done 
// as follows

C:\> cinst poshgit

// After it's installed in order to allow posh-git to pass credential to windows store easily 
// thus allowing us connect to VS Online more easily and preventing us from typing in 
// credentials everytime we need to access VSO; use the following script to achieve the
// same

C:\> cinst git-credential-winstore

//First time Git setup

// Something called as git config file is a file that bascially sets-up git for our use
// Still there are certain things we need to setup such as 
// username, email address, Default text editor, Default diff tool
// We can define these at global, repository, or branch level
// The diff tool can be set for diffing everything or just a file depending on what we 
// want


// Step to setting up Git on windows 
 
// Install Chocolatey which can be grab done by grabbing the code from chocolatey website
// Install cinst poshgit 

// set ExecutionPolicy to allow powershell to run script to enable posh git and run script
// that aren't created on current machine

// Use the following script to allow powershell to set ExecutionPolicy

set-ExecutionPolicy remote

// Press yes to any question that may be asked 
// restart powershell

// install ssh using 
cinst sshagent

// just type git to check if system is having git commands

// the line sets user name 
git config --global user.name "Harshit Singh" 

// the line binds user and user email
git config --global user.email "singhharshit.4674@gmail.com"

// the line will change default editor
git config --global core.editor notepad.exe  

// you can sign/validate commits using public and private keys

cinst git-credential-winstore 

// refer chocolatey for different version of credential store 

// Git treat line endings as "Checkout as-is, commit unix-style line endings"