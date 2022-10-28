import { projetMethods } from "./projetController";

export const projetRoutes = [
    {
        path : "/projet/get-all",
        method : "post",
        action : projetMethods.getAll
    },
    {
        path : "/projet/get",
        method : "post",
        action : projetMethods.getById
    },
    {
        path : "/projet/save",
        method : "post",
        action : projetMethods.save
    },
    {
        path : "/projet/delete",
        method : "post",
        action : projetMethods.delete
    }
]