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

const viewAllEmployees = () => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT e.id, e.first_name, e.last_name, r.title AS job_title, d.name AS department, r.salary, 
            CONCAT(m.first_name, ' ', m.last_name) AS manager
            FROM employee e
            LEFT JOIN role r ON e.role_id = r.id
            LEFT JOIN departments d ON r.department_id = d.id
            LEFT JOIN employee m ON e.manager_id = m.id
        `;
        connection.query(query, (err, results) => {
            if (err) {
                console.error(err);
                reject(err);
            }else {
                resolve(results);
            }
        });
    });
};

const roleDetails = () => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT role.id, role.title, role.salary, departments.name AS department
            FROM role
            JOIN departments ON role.department_id = departments.id
        `;
        connection.query(query, (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
  getEmployee,
  getDepartment,
  addDepartment,
  addRole,
  getRole,
  viewAllEmployees,
  roleDetails,
};
