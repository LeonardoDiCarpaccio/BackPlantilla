import { In, Like } from "typeorm"

export class crudMethodsHelpers {

    public buildfindByConditions(body) {
        body = this.buildWhereClause(body)
    }

    public buildWhereClause(body) {
        body.where = body.where ?? {}

        if (body.like) {
                body = this.buildLikeClause(body)
            delete body.like
        }
        if(body.in) {
                body = this.buildInClause(body)
            delete body.in
        }
        return body

    }

    public buildLikeClause(body) {
        for (const [key, value] of Object.entries(body.like)) {
            body.where[key] = Like("%" + value + "%");
        }
        return body
    }

    public buildInClause(body) {
        for (const [key, value] of Object.entries(body.in)) { 
            if(Array.isArray(value))
            body.where[key] = In(value)
        }
        return body
    }

}

export const crudMethods = new crudMethodsHelpers()