import { getManager } from "typeorm";
import { Request, Response } from "express";
import { price_type } from "../../entities/price_type";
import { crudMethods } from "../../helpers/crudMethods";

export class price_typeController {
  public async getAll(request: Request, response: Response) {
    const price_typeRepository = getManager().getRepository(price_type);
    const result = await price_typeRepository.find({});
    response.send(result);
  }

  public async getById(request: Request, response: Response) {
    const price_typeRepository = getManager().getRepository(price_type);
    const result = await price_typeRepository.find({
      where: { id: request.body.id },
    });
    response.send(result);
  }
  public async findBy(request: Request, response: Response) {
    const price_typeRepository = getManager().getRepository(price_type);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await price_typeRepository.find(where);

    response.send(result);
  }
  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    const price_typeRepository = getManager().getRepository(price_type);
    const result = await price_typeRepository.save(request.body);
    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const price_typeRepository = getManager().getRepository(price_type);
    const result = await price_typeRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const price_typeMethods = new price_typeController();
