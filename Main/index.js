//import npm i inquirer pkg, filesystem, 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const htmlTeamFilePath = './dist/Team.html'
//import classes 
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");

function addManager(){
    
    inquirer.prompt([
    {
        name:"managerName",
        type: "input",
        message: "Enter the manager's name",
    }
    {
        name:"mangerId",
        type: "input",
        message: "Enter the manager's employee ID number",
    }
    {
        name:"mangerEmail",
        type: "input",
        message: "Enter the manager's email address",
    }
    {
        name:"mangerOfficeNumber",
        type: "input",
        message: "Enter the manager's office number",
    }
    {
        name:"addTeamMember",
        type: "list",
        message: "Enter the team member you want to add from the choice list",
        choices: ["Engineer", "Intern", "Other", "None"]
    }
])
}

function addEngineer(){
    inquirer.prompt([
        {
            name:"engineerName",
            type: "input",
            message: "Enter the engineer's name",
        }
        {
            name:"engineerId",
            type: "input",
            message: "Enter the engineer's employee ID number",
        }
        {
            name:"engineerEmail",
            type: "input",
            message: "Enter the engineer's email address",
        }
        {
            name:"engineerGithub",
            type: "input",
            message: "Enter the engineer's GitHub username",
        }
    ])
}
function addIntern(){
    inquirer.prompt([
        {
            name:"internName",
            type: "input",
            message: "Enter the intern's name",
        }
        {
            name:"internId",
            type: "input",
            message: "Enter the intern's employee ID number",
        }
        {
            name:"internEmail",
            type: "input",
            message: "Enter the intern's email address",
        }
        {
            name:"internSchool",
            type: "input",
            message: "Enter the intern's school name",
        }
    ])
}
function addOtherEmployee(){
    inquirer.prompt([
        {
            name:"employeeName",
            type: "input",
            message: "Enter the name of the employee",
        }
        {
            name:"employeeId",
            type: "input",
            message: "Enter the employee ID number",
        }
        {
            name:"employeeEmail",
            type: "input",
            message: "Enter the employee's email address",
        }
        {
            name:"employeeGithub",
            type: "input",
            message: "Enter the employee's GitHub username",
        }
    ])
}

//create two different arrays to hold team members and their ids
var allTeamMembers = [];
var teamIds = [];

.then(answers) {
    let manager = new manager(
        answers.managerName, 
        answers.managerEmail, 
        answers.managerOfficeNumber);
    teamIds.push(answer.managerId)
    allTeamMembers.push(manager);

    let engineer = new engineer(
        answers.engineerName, 
        answers.engineerEmail, 
        answers.engineerGithub);
    teamIds.push(answers.engineerId);
    allTeamMembers.push(engineer);
    
    let intern = new Intern(
        answers.internName, 
        answers.internEmail, 
        answers.internSchool);
    teamIds.push(answers.internId);
    allTeamMembers.push(intern);

    let employee = new employee(
        answers.employeeName, 
        answers.employeeId, 
        answers.employeeEmail, 
    teamIds.push(answers.employeeId);
    allTeamMembers.push(employee);
}

.catch(err){
    if(err.tryAgain){
        else {
            return "";
}}}


