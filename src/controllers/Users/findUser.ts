import  { Request, Response } from 'express';
import { usuarios } from '../../fakedata/usuarios.json';
import { User } from '../../models/User';

export default (req:Request, res: Response) =>{
    const id: string = req.params.id;
    const userFound: User = usuarios.find(user => user.id === id);

    if(!userFound){
        res.sendStatus(404);
    }

    res.send(userFound);
};