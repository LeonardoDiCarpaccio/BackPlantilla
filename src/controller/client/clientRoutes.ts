import { clientMethods } from "./clientController";

export const clientRoutes = [
  {
    path: "/client/get-all",
    method: "post",
    allowedRoles: ["admin"],
    apiKeyRequired: true,

    action: clientMethods.getAll,
  },
  {
    path: "/client/findBy",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: clientMethods.findBy,
  },
  {
    path: "/client/save",
    method: "post",
    allowedRoles: ["admin"],

    action: clientMethods.save,
  },
  {
    path: "/client/delete",
    method: "post",
    allowedRoles: ["admin"],

    action: clientMethods.delete,
  },
];
