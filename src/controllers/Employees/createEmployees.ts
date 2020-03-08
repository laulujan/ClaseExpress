import  { Request, Response } from 'express';
import { empleados } from '../../fakedata/empleados.json';
import { Employee } from '../../models/Employee';

export default (req:Request, res: Response) => {
    const empleado: Employee = req.body;
    empleados.push(empleado);
    res.status(201).send(empleado);
};