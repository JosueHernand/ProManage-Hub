const inquirer = require('inquirer');
const connection = require('../config/connection');
const { getRole, addDepartment, getDepartment, getEmployee, viewAllEmployees, roleDetails } = require('../controllers/trackerController');
