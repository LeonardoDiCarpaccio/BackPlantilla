import { getManager } from "typeorm";
import {Request, Response} from "express";
import { role } from "../../entities/role";


export class roleController {
    public async getAll(request: Request, response: Response) {
        const roleRepository = getManager().getRepository(role);
        const result = await roleRepository.find({});
        response.send(result);
    }

    public async getById(request: Request, response: Response) {
        const roleRepository = getManager().getRepository(role);
        const  result = await roleRepository.find({where : {id : request.body.id}});
        response.send(result);
    }
    // insert with no id, update with id
    public async save(request: Request, response: Response) {
        const roleRepository = getManager().getRepository(role);
        const result = await roleRepository.save(request.body);
        response.send(result);
    }

    public async delete(request : Request,response : Response){
        const roleRepository = getManager().getRepository(role)
        const result = await roleRepository.delete({id : request.body.id})
        response.send(result)
    }

}

export const roleMethods = new roleController()


