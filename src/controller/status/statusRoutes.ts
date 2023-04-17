import { statusMethods } from "./statusController";

export const statusRoutes = [
  {
    path: "/status/get-all",
    method: "post",
    allowedRoles: ["admin", "client"],
    action: statusMethods.getAll,
  },
  {
    path: "/status/get",
    method: "post",
    allowedRoles: ["admin", "client"],
    action: statusMethods.getById,
  },
  {
    path: "/status/save",
    method: "post",
    allowedRoles: ["admin"],

    action: statusMethods.save,
  },
  {
    path: "/status/delete",
    method: "post",
    allowedRoles: ["admin"],

    action: statusMethods.delete,
  },
  {
    path: "/status/findBy",
    method: "post",
    allowedRoles: ["admin", "client"],
    action: statusMethods.findBy,
  },
  //need to use {"where": {"id": ""} for findBy id
];
