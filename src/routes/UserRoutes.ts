import listUsers from '../controllers/Users/listUsers';
import createUsers from '../controllers/Users/createUsers';
import updateUser from '../controllers/Users/updateUser';
import deleteUser from '../controllers/Users/deleteUser';
import findUser from '../controllers/Users/findUser';
import express, { Router } from 'express';
import userValidationSchema from '../middlewares/users';
//import tokenValidator from '../middlewares/token'

const router: Router = express.Router();

// users routes
router.get('/list', [listUsers]);
router.post('/create', [userValidationSchema, createUsers]);
router.put('/update', [userValidationSchema, updateUser]);
router.delete('/delete/:id', deleteUser);
router.get('/find/:id', findUser)

export default router;