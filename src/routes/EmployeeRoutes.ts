import listEmployees from '../controllers/Employees/listEmployees';
import createEmployees from '../controllers/Employees/createEmployees';
import updateEmployee from '../controllers/Employees/updateEmployee';
import deleteEmployee from '../controllers/Employees/deleteEmployee';
import findEmployee from '../controllers/Employees/findEmployee';
import express, { Router } from 'express';
import employeeValidationSchema from '../middlewares/employees';
//import tokenValidator from '../middlewares/token'

const router: Router = express.Router();

// users routes
router.get('/list', [listEmployees]);
router.post('/create', [employeeValidationSchema, createEmployees]);
router.put('/update', [employeeValidationSchema, updateEmployee]);
router.delete('/delete/:id', deleteEmployee);
router.get('/find/:id', findEmployee)

export default router;