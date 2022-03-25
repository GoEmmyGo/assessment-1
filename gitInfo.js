/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition = [`Git is a program that addresses version control and prevents complete and total chaos. It allows code changes to be tracked, prevents bugs and loss of progress and allows you to view hisory of code in a digestable manner`]
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition = [`Github is a website, aka a browser version of gitDefinition that is truthfully much easier to navigate, easy being relative of course`]
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
var gitInitDefinition = [`Git init is a command in the terminal that initializes the creation of a repository inside of another repo, kind of like a folder, that will hold and track all changes (good for team projects)`]
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
var gitCloneDefinition = [`Git clone is a command that is used in the terminal to make a copy of a repository in your github (aka your the git in your browser) and saves that onto your local computer. This is great for when Github is down and your employer is considering giving you the day off. You can simply remind them that you and all of your coworkers have a local copy of your repositories and can proceed with business as usual, how nice!`]
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
var gitStatusDefinition = [`Git status is a command you can use in the terminal that can update you and tell you if files have been staged (aka pre-saved), if you local and remote branches are linked, if any files are causing conflicts.`]
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
var gitAddDefinition = [`Git add is a command used to, pardon the redundancy, "add" the recent changes to your code, after initialization, in preparation for commiting those changes and adding them to your repository, sort of like a pre-save`]

var gitAddCode = [`git add .`]
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
var gitCommitDefinition = [`Git commit creates a snapshot of your code and adds it to your repository, basically saves it as a new version along with each prior version`]

var gitCommitCode = [`git commit -m "new snapshot"`]

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
var gitPushDefinition = [`Git push is similar to refreshing a save, it updates the github (remote) with the local changes you have made`]