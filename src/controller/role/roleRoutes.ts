import { roleMethods } from "./roleController";

export const roleRoutes = [
  {
    path: "/role/get-all",
    method: "post",
    allowedRoles: ["admin"],

    action: roleMethods.getAll,
  },
  {
    path: "/role/get",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: roleMethods.getById,
  },
  {
    path: "/role/save",
    method: "post",
    allowedRoles: ["admin"],

    action: roleMethods.save,
  },
  {
    path: "/role/delete",
    method: "post",
    allowedRoles: ["admin"],

    action: roleMethods.delete,
  },
  {
    path: "/role/findBy",
    method: "post",
    action: roleMethods.findBy,
  },
  //need to use {"where": {"id": ""} for findBy id
];
