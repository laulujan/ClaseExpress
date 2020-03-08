import { Request, Response, NextFunction } from "express";
import { Employee, EmployeeSchema } from "../models/Employee";

export default( req: Request, res: Response, next: NextFunction) => {
    const employee: Employee = req.body;
    const validation = EmployeeSchema.validate(employee);
    if( validation.error){
        return res.send(400).json(validation.error.details)
    }
    next();
}