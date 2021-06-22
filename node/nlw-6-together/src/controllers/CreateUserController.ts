import { Request, Response } from "express";
import CreateUsersService  from "../services/CreateUsersService";

class CreateUserController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, admin } = req.body;

        const userService = new CreateUsersService();

        const user = await userService.execute({name, email, admin});

        return res.json(user);
    }
}

export { CreateUserController };