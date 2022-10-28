import { roleMethods } from "./roleController";

export const roleRoutes = [
    {
        path : "/role/get-all",
        method : "post",
        action : roleMethods.getAll
    },
    {
        path : "/role/get",
        method : "post",
        action : roleMethods.getById
    },
    {
        path : "/role/save",
        method : "post",
        action : roleMethods.save
    },
    {
        path : "/role/delete",
        method : "post",
        action : roleMethods.delete
    }
]