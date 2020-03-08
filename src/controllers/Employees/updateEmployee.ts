import  { Request, Response }  from 'express';
import { empleados } from '../../fakedata/empleados.json';
import { Employee } from '../../models/Employee';

export default (req: Request, res: Response) =>{
    const employee: Employee = req.body;
    const index = empleados.findIndex(e => e.id === employee.id);
    if(index === -1){
        res.status(404);
    }
    empleados.splice(index, 1, employee);
    res.status(200).json(employee);
};