import { Request, Response } from 'express';
import { usuarios } from '../../fakedata/usuarios.json'

//list
export default (req: Request, res: Response) =>{
    res.status(200).json(usuarios);
    
};