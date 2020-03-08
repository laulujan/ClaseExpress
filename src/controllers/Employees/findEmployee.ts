import  { Request, Response } from 'express';
import { empleados } from '../../fakedata/empleados.json';
import { Employee } from '../../models/Employee';

export default (req:Request, res: Response) =>{
    const id: string = req.params.id;
    const employeeFound: Employee = empleados.find(employee => employee.id === id);

    if(!employeeFound){
        res.sendStatus(404);
    }

    res.send(employeeFound);
};