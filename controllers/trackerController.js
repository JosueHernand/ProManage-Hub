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
