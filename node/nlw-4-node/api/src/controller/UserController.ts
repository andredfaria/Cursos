import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UserRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppErros';

class UserController {
    async create (req: Request, res: Response) {
      const {name, email} = req.body;

      const schema = yup.object().shape({
        name: yup.string().required('nome é obrigatorio'),
        email: yup.string().email().required('email esta incorreto'),
      });
      try {
        await schema.validate(req.body, {abortEarly: false});
      } catch (error) {
        return res.status(400).json({ error: error })
      }

      if (!(await schema.isValid(req.body))) 
        throw new AppError("Validade faill");
      
      const usersRepository = getCustomRepository(UsersRepository);

      const userAlreadyExists = await usersRepository.findOne({
        email
      })

      const user = usersRepository.create({
          name, email
      });

      if(userAlreadyExists)
        throw new AppError("User already exists");
      

      await usersRepository.save(user);

      return res.status(201).json(user);
    }
}

export { UserController };