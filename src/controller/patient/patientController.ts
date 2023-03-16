import { getManager, Like } from "typeorm";
import { Request, Response } from "express";
import { patient } from "../../entities/patient";
import { crudMethods } from "../../helpers/crudMethods";

export class patientController {
  public async getAll(request: Request, response: Response) {
    const patientRepository = getManager().getRepository(patient);
    const result = await patientRepository.find({});
    response.send(result);
  }

  public async findBy(request: Request, response: Response) {
    const patientRepository = getManager().getRepository(patient);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await patientRepository.find(where);

    response.send(result);
  }

  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    console.log("request", request.body);
    const patientRepository = getManager().getRepository(patient);
    const result = await patientRepository.save(request.body);
    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const patientRepository = getManager().getRepository(patient);
    const result = await patientRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const patientMethods = new patientController();
