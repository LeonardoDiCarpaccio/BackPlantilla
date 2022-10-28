import { getManager } from "typeorm";
import {Request, Response} from "express";
import { client } from "../../entities/client";


export class clientController {
    public async getAll(request: Request, response: Response) {
        const clientRepository = getManager().getRepository(client);
        const result = await clientRepository.find({});
        response.send(result);
    }

    public async getById(request: Request, response: Response) {
        const clientRepository = getManager().getRepository(client);
        const  result = await clientRepository.find({where : {id : request.body.id}});
        response.send(result);
    }
    // insert with no id, update with id
    public async save(request: Request, response: Response) {
        const clientRepository = getManager().getRepository(client);
        const result = await clientRepository.save(request.body);
        response.send(result);
    }

    public async delete(request : Request,response : Response){
        const clientRepository = getManager().getRepository(client)
        const result = await clientRepository.delete({id : request.body.id})
        response.send(result)
    }

}

export const clientMethods = new clientController()


