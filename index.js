const inquirer = require("inquirer");
const fs = require("fs");
const generatedPage = "./dist/index.html";

//classes for employees
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let EmployeesArr = [];

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
      choices: ["Intern", "Engineer", "Done"],
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
    Result(answers.EmployeeList);
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
      let engineer = new Engineer(
        answers.name,
        answers.Id,
        answers.Email,
        answers.School
      );
      EmployeesArr.push(engineer);
      Result(answers.EmployeeList);
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
      EmployeesArr.push(intern);
      Result(answers.EmployeeList);
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}
function Result(result) {
  if (result === "Engineer") {
    addEngr();
  } else if (result === "Intern") {
    addIntern();
  } else {
    generateHTML();
  }
}

function genFirstHTML() {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Page</title>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <div class="NavBar">
            <h1 class="NavBarTitle">Team</h2>
        </div>
        <div class="employeeCardBody"> `;
}
function genEmployeeCard(employee) {
  return `<div class="employeeCard">
 <div class="teamMemberTitle">
     <h3>${employee.getName()} - ${employee.getRole()}</h3>
 </div>
 <div class="teamMemberBody">
     <ul>
         <li>ID:${employee.getId()}</li>
         <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        
     </ul>
 </div>
</div>`;
}

function genLastHTML() {
  return `</div>
    </body>
    </html>`;
}

function generateHTML() {
  fs.writeFileSync(generatedPage,"");
  let htmlData = genFirstHTML();

  for (var a in EmployeesArr) {
    htmlData += genEmployeeCard(EmployeesArr[a]);
  }

  htmlData += genLastHTML();
  fs.writeFileSync(generatedPage, htmlData);
}
