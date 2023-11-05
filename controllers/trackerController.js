const connection = require('../config/connection');

const getEmployee = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM employee', (error, results) => {
        if (error) {
            console.error(error);
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
};

const getDepartment = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM departments', (error, results) => {
        if (error) {
            console.error(error);
            reject(error);
        } else {
            resolve(results);
        }
        });
    });
};

const addDepartment = (departmentName, callback) => {
    const sql = 'INSERT INTO departments (name) VALUES (?)';
    connection.query(sql, [departmentName], (error, result) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      callback(null, result);
    });
};

const addRole = (roleName, roleSalary, departmentId, callback) => {
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    connection.query(sql, [roleName, roleSalary, departmentId], (error, result) => {
        if (error) {
            console.error(error);
            callback(error, null);
            return;
        }
        callback(null, result);
    });
};

const getRole = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM role', (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}