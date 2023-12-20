const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEmployees);
router.post('/', controller.addEmployee); 
router.get('/:id', controller.getEmployeesById);
router.put('/:id', controller.updateEmployee);
router.delete('/:id', controller.removeEmployee);

module.exports = router; 