INSERT INTO departments (name)
VALUES ('Enginerring'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 34344334, 4),
    ("Salesperson", 50, 4),
    ("Lead Engineer", 324, 1),
    ("Software Engineer", 435, 1),
    ("Account Manager", 324325, 2),
    ("Accountant", 24525, 2),
    ("Legal Team Lead", 324, 3),
    ("Lawyer", 234234, 3),
    ("Customer Service", 100000000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 5),
    ("Mike", "Chan", 2, 1),
    ("Ashley", "Rodriguez", 3, 5),
    ("Kevin", "Tupik", 4, 3),
    ("Kunal", "Singh", 5, 5),
    ("Malia", "Brown", 6, 7),
    ("Sarah", "Lourd", 7, 5),
    ("Tom", "Allen", 8, 7),
    ("Sam", "Kash", )
    