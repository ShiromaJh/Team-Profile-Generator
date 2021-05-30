const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = "./dist/index.html";

//classes for employees
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let EmployeesArr = [];

function addEmployee(teamate) {
  if (teamate === "Manager") {
  }
}

inquirer
  .prompt([
    {
      type: "lnput",
      name: "ManagerName",
      message: "What is the name of the Manager?",
    },
    {
      type: "lnput",
      name: "ManagerId",
      message: "What is the Manager's ID number?",
    },
    {
      type: "lnput",
      name: "ManagerEmail",
      message: "What is the Managers's email address?",
    },
    {
      type: "lnput",
      name: "ManagerOffice",
      message: "What is the Managers office number?",
    },
    {
      type: "list",
      name: "EmployeeList",
      message: "Select which type of team member to add",
      choices: ["Intern", "Engineer"],
    },
  ])
  .then((answers) => {
    let manager = new Manager(
      answers.ManagerName,
      answers.ManagerId,
      answers.ManagerEmail,
      answers.ManagerOffice
    );
    EmployeesArr.push(manager);
    if (answers.EmployeeList === "Engineer") {
      addEngr();
    } else if (answers.EmployeeList === "Intern") {
      addIntern();
    } else {
      generatePage();
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });

function addEngr() {
  inquirer
    .prompt([
      {
        type: "lnput",
        name: "Name",
        message: "What is the name of the Engineer?",
      },
      {
        type: "lnput",
        name: "Id",
        message: "What is the Engineer's ID number?",
      },
      {
        type: "lnput",
        name: "Email",
        message: "What is the Engineer's email address?",
      },
      {
        type: "lnput",
        name: "github",
        message: "What is the Engineers github username?",
      },
      {
        type: "list",
        name: "EmployeeList",
        message: "Select which type of team member to add",
        choices: ["Intern", "Engineer", "Done"],
      },
    ])

    .then((answers) => {
      let intern = new Intern(
        answers.name,
        answers.Id,
        answers.Email,
        answers.School
      );
      EmployeesArr.push(teamate);
      if (answers.EmployeeList === "Engineer") {
        addEngr();
      } else if (answers.EmployeeList === "Intern") {
        addIntern();
      } else {
        generatePage();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "lnput",
        name: "Name",
        message: "What is the name of the Intern?",
      },
      {
        type: "lnput",
        name: "Id",
        message: "What is the Intern's ID number?",
      },
      {
        type: "lnput",
        name: "Email",
        message: "What is the Intern's email address?",
      },
      {
        type: "lnput",
        name: "School",
        message: "What school does the Intern attend?",
      },
      {
        type: "list",
        name: "EmployeeList",
        message: "Select which type of team member to add",
        choices: ["Intern", "Engineer", "Done"],
      },
    ])

    .then((answers) => {
      let intern = new Intern(
        answers.name,
        answers.Id,
        answers.Email,
        answers.School
      );
      EmployeesArr.push(teamate);
      if (answers.EmployeeList === "Engineer") {
        addEngr();
      } else if (answers.EmployeeList === "Intern") {
        addIntern();
      } else {
        generatePage();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}
