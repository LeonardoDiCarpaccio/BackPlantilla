import { getManager } from "typeorm";
import {Request, Response} from "express";
import { user } from "../../entities/user";


export class userController {
    public async getAll(request: Request, response: Response) {
        const userRepository = getManager().getRepository(user);
        const result = await userRepository.find({});
        response.send(result);
    }

    public async getById(request: Request, response: Response) {
        const userRepository = getManager().getRepository(user);
        const  result = await userRepository.find({where : {id : request.body.id}});
        response.send(result);
    }
    // insert with no id, update with id
    public async save(request: Request, response: Response) {
        const userRepository = getManager().getRepository(user);
        const result = await userRepository.save(request.body);
        response.send(result);
    }

    public async delete(request : Request,response : Response){
        const userRepository = getManager().getRepository(user)
        const result = await userRepository.delete({id : request.body.id})
        response.send(result)
    }

}

export const userMethods = new userController()


