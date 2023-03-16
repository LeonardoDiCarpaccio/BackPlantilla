import { getManager, Like } from "typeorm";
import { Request, Response } from "express";
import { item } from "../../entities/item";
import { crudMethods } from "../../helpers/crudMethods";

export class itemController {
  public async getAll(request: Request, response: Response) {
    const itemRepository = getManager().getRepository(item);
    const result = await itemRepository.find({});
    response.send(result);
  }

  public async findBy(request: Request, response: Response) {
    const itemRepository = getManager().getRepository(item);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await itemRepository.find(where);

    response.send(result);
  }
  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    const itemRepository = getManager().getRepository(item);
    const result = await itemRepository.save(request.body);
    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const itemRepository = getManager().getRepository(item);
    const result = await itemRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const itemMethods = new itemController();
