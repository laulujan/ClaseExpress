import  { Request, Response } from 'express';
import { usuarios } from '../../fakedata/usuarios.json';

export default (req: Request, res: Response) =>{
    const id: string = req.params.id;
    const userFound: number = usuarios.findIndex(user => user.id === id);

    if(!userFound){
        res.sendStatus(404);
    }
    usuarios.splice(userFound, 1);
    res.status(200).json(userFound);
};