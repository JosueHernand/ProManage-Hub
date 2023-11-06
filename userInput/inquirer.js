const inquirer = require('inquirer');
const connection = require('../config/connection');
const { getRole, addDepartment, getDepartment, getEmployee, viewAllEmployees, roleDetails } = require('../controllers/trackerController');

const mainQuestion = [
    {
        type: 'list',
        name: 'questionList',
        message: 'What would you like to do?',
        choices: ['View All Employees',
        'Add Employee', 
        'Update Employee Role', 
        'View All Roles', 
        'Add Role', 
        'View All Departments', 
        'Add Department', 
        'Quit'],
    },
];


const question = [
    {
        type: 'input',
        name: 'firstnameEmpl',
        message: "What is the employee's first name?",
        when: (answers) => answers.questionList === 'Add Employee'
    },
    {
        type: 'input',
        name: 'lastnameEmpl',
        message: "What is the employee's last name?",
        when: (answers) => answers.questionList === 'Add Employee'
    },
    {
        type: 'list',
        name: 'emplRole',
        message: "What is the employee's role?",
        when: (answers) => answers.questionList === 'Add Employee',
        choices: async() => {
            try {
              const response = await getRole();
              const roles = response;
              const roleChoices = roles.map (role => ({
                name: role.title,
                value: role.id,
              }));
              return roleChoices;
            }  catch (error) {
              console.log(error);
              return [];
            }
        }
    },
    {
        type: 'list',
        name: 'emplManager',
        message: "Who is the employee's manager?",
        when: (answers) => answers.questionList === 'Add Employee',
        choices: async() => {
            try {
                const response = await getEmployee();
                const employees = response;
                const employeeChoices = employees.map (employee => ({
                    name: `${employee.first_name} ${employee.last_name}`,
                    value: employee.id,
                }));
                return employeeChoices;
            } catch (error) {
                console.log(error);
                return [];
            }
        }
    },
    {
        type: 'list',
        name: 'updateEmployeeRole',
        message: "Which employee's role do you want to update?",
        when: (answers) => answers.questionList === 'Update Employee Role',
        choices: async() => {
            try {
                const response = await getEmployee();
                const employees = response;
                const employeeChoices = employees.map (employee => ({
                    name: `${employee.first_name} ${employee.last_name}`,
                    value: employee.id,
                }));
                return employeeChoices;
            } catch (error) {
                console.log(error);
                return [];
            }
        }
    },
    {
        type: 'list',
        name: 'roleSelect',
        message: "Which role do you want to assign the selected employee?",
        when: (answers) => answers.questionList === 'Update Employee Role',
        choices: async() => {
            try {
                const response = await getRole();
                const roles = response;
                const roleChoices = roles.map (role => ({
                    name: role.title,
                    value: role.id,
                }));
                return roleChoices;
            } catch (error) {
                console.log(error);
                return [];
            }
        }
    },
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role?',
        when: (answers) => answers.questionList === 'Add Role'
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: 'What is the salary of the role?',
        when: (answers) => answers.questionList === 'Add Role'
    },
];
