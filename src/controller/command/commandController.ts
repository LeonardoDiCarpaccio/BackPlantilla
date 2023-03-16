import { getManager, Like } from "typeorm";
import { Request, Response } from "express";
import { command } from "../../entities/command";
import { crudMethods } from "../../helpers/crudMethods";

export class commandController {
  public async getAll(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);
    const result = await commandRepository.find({});
    response.send(result);
  }

  public async findBy(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await commandRepository.find(where);

    response.send(result);
  }

  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);
    const result = await commandRepository.save(request.body);
    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);
    const result = await commandRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const commandMethods = new commandController();
