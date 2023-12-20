const getEmployees = 'SELECT * FROM employees';
const getEmployeesById = 'SELECT * FROM employees WHERE id = $1';
const checkEmailExists = 'SELECT e FROM employees e WHERE e.email = $1';
const addEmployee = 'INSERT INTO employees (name, position, email, age, dob) VALUES ($1, $2, $3, $4, $5)';
const removeEmployee = 'DELETE FROM employees WHERE id = $1';
const updateEmployee = 'UPDATE employees SET name = $1 WHERE id = $2';

module.exports = {
    getEmployees,
    getEmployeesById,
    checkEmailExists,
    addEmployee,
    removeEmployee,
    updateEmployee,
}