import { commandMethods } from "./commandController";

export const commandRoutes = [
  {
    path: "/command/get-all",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: commandMethods.getAll,
  },
  {
    path: "/command/findBy",
    method: "post",
    allowedRoles: ["admin", "client"],
    action: commandMethods.findBy,
  },
  {
    path: "/command/save",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: commandMethods.save,
  },
  {
    path: "/command/delete",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: commandMethods.delete,
  },
];
