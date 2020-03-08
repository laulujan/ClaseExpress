import  { Request, Response }  from 'express';
import { usuarios } from '../../fakedata/usuarios.json';
import { User } from '../../models/User';

export default (req: Request, res: Response) =>{
    const user: User = req.body;
    const index = usuarios.findIndex(u => u.id === user.id);
    if(index === -1){
        res.status(404);
    }
    usuarios.splice(index, 1, user);
    res.status(200).json(user);
};