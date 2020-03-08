import jwt from 'jsonwebtoken';
import { empleados } from '../../fakedata/empleados.json';
import { constants } from '../../config/constants'
import { Request, Response } from 'express';

export default(req: Request, res: Response) => {
    const credentials = req.body;

    const match = empleados.find(employee => {
        if(employee.id === credentials.id && employee.nombre === credentials.nombre){
            return employee;
        }
    });
    if(!match){
        return res.sendStatus(404);
    }
    const { id, nombre } = match;

    const token = jwt.sign({ id, nombre }, constants.JWTKey, { expiresIn: "24h" });
    res.status(200).json({token});
}