import { getManager } from "typeorm";
import {Request, Response} from "express";
import { projet } from "../../entities/projet";


export class projetController {
    public async getAll(request: Request, response: Response) {
        const projetRepository = getManager().getRepository(projet);
        const result = await projetRepository.find({});
        response.send(result);
    }

    public async getById(request: Request, response: Response) {
        const projetRepository = getManager().getRepository(projet);
        const  result = await projetRepository.find({where : {id : request.body.id}});
        response.send(result);
    }
    // insert with no id, update with id
    public async save(request: Request, response: Response) {
        const projetRepository = getManager().getRepository(projet);
        const result = await projetRepository.save(request.body);
        response.send(result);
    }

    public async delete(request : Request,response : Response){
        const projetRepository = getManager().getRepository(projet)
        const result = await projetRepository.delete({id : request.body.id})
        response.send(result)
    }

}

export const projetMethods = new projetController()


