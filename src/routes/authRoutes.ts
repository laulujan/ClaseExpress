import express, { Router } from 'express';
import login from '../controllers/Auth/login'
import loginEmployees from '../controllers/Auth/loginEmployees'
import credentials from '../middlewares/credentials'

const router: Router = express.Router();

router.post('/login', [credentials, login]);
router.post('/loginEmployees', [credentials, loginEmployees]);

export default router;