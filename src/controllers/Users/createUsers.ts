import  { Request, Response } from 'express';
import { usuarios } from '../../fakedata/usuarios.json';
import { User } from '../../models/User';

export default (req:Request, res: Response) => {
    const user: User = req.body;
    usuarios.push(user);
    res.status(201).send(user);
};