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
        }
    },
    {
        type: 'list',
        name: 'emplManager',
        message: "Who is the employee's manager?",
        when: (answers) => answers.questionList === 'Add Employee',
        choices: async() => {
        }
    },
];
