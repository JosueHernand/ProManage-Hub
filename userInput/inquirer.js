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
