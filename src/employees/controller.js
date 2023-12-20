const pool = require('../../db');

const queries = require('./queries');

const getEmployees = (req, res) => {
    pool.query(queries.getEmployees, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getEmployeesById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getEmployeesById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}; 

const addEmployee = (req, res) => {
    const { name, position, email, age, dob } = req.body;

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        
        if(results.rows.length) {
            res.send('Email already exists');
        };

        pool.query(queries.addEmployee, [name, position, email, age, dob], (error, results) => {
            if (error) throw error;
            res.status(201).send('Employee Created Successful');
        });
    });
};

const removeEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEmployeesById, [id], (error, results) => {

        const noEmployeeFound = !results.rows.length;
        if (noEmployeeFound) {
            res.send('Employee does not exist in database');
        };

        pool.query(queries.removeEmployee, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Employee removed successfully');
        });
    });
};

const updateEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getEmployeesById, [id], (error, results) => {
        const noEmployeeFound = !results.rows.length;
        if (noEmployeeFound) {
            res.send('Employee does not exist in database');
        };

        pool.query(queries.updateEmployee, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Employee updated successfully');
        });
    });
};

module.exports = {
    getEmployees,
    getEmployeesById,
    addEmployee,
    removeEmployee,
    updateEmployee,
};