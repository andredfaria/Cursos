import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest {
    email: string,
    name: string,
    admin?: boolean
}

export default class CreateUsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async execute({ name, email, admin }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository);

        if (!email)
            return("EMAIL INCORRECT");
            
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists)
            return("USER ALREADY EXISTS");
        
        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}