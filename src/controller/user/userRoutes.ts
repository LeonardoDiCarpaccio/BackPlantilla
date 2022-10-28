import { userMethods } from "./userController";

export const userRoutes = [
    {
        path : "/user/get-all",
        method : "post",
        action : userMethods.getAll
    },
    {
        path : "/user/get",
        method : "post",
        action : userMethods.getById
    },
    {
        path : "/user/save",
        method : "post",
        action : userMethods.save
    },
    {
        path : "/user/delete",
        method : "post",
        action : userMethods.delete
    }
]