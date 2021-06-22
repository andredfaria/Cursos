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
        const usersRepository = new UsersRepository();

        if (!email)
            throw new Error("EMAIL INCORRECT");
            
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists)
            throw new Error("USER ALREADY EXISTS");
        
        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}