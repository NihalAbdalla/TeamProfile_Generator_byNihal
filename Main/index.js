//import npm i inquirer pkg, filesystem, 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const htmlTeamFilePath = './dist/Team.html'

//import classes 
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");

inquirer.prompt([
    {
        name:"managerName",
        type: "input",
        message: "Enter the manager's name",
    }
    {
        name:"title",
        type: "input",
        message: "Enter your name",
    }
    {
        name:"title",
        type: "input",
        message: "Enter your name",
    }
    {
        name:"title",
        type: "input",
        message: "Enter your name",
    }
        
    
])

.then(answers) {
    fs.writeFileSync(htmlTeamFilePath,"");
})


.catch(err){
    if(err.tryAgain){
        else {
            return "";
}}}


