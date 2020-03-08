import  { Request, Response } from 'express';
import { empleados } from '../../fakedata/empleados.json';

export default (req: Request, res: Response) =>{
    const id: string = req.params.id;
    const employeeFound: number = empleados.findIndex(employee => employee.id === id);

    if(!employeeFound){
        res.sendStatus(404);
    }
    empleados.splice(employeeFound, 1);
    res.status(200).json(employeeFound);
};