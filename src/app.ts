import express, { Application, Request, Response } from 'express';

const app: Application = express();

import authRoutes from './routes/authRoutes';
import tokenValidator from './middlewares/token';
import bodyParser from 'body-parser';
import userRouters from './routes/UserRoutes'
import EmployeeRoutes from './routes/EmployeeRoutes';


app.use('/users',[tokenValidator, userRouters]);
app.use('/employees', [tokenValidator, EmployeeRoutes]);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('hellooooo');
});

export default app;