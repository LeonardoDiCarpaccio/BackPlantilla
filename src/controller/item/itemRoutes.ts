import { itemMethods } from "./itemController";

export const itemRoutes = [
  {
    path: "/item/get-all",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: itemMethods.getAll,
  },
  {
    path: "/item/findBy",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: itemMethods.findBy,
  },
  {
    path: "/item/save",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: itemMethods.save,
  },
  {
    path: "/item/delete",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: itemMethods.delete,
  },
];
