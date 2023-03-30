import { hash } from "bcrypt";
import { User } from "../models/User";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension"

export class UserSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any>{
        const userRepository = dataSource.getRepository(User)

        const userData = {
            name: "Admin User",
            email: "user@admin.com",
            password: await hash("teste", 10)
        }

        const userAlreadExist = await userRepository.findBy({ email: userData.email });

        if(!userAlreadExist){
            const newUser = userRepository.create(userData)
            await userRepository.save(newUser);
        }
    }
}