import { price_typeMethods } from "./price_typeController";

export const price_typeRoutes = [
  {
    path: "/price_type/get-all",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: price_typeMethods.getAll,
  },
  {
    path: "/price_type/get",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: price_typeMethods.getById,
  },
  {
    path: "/price_type/save",
    method: "post",
    allowedRoles: ["admin"],

    action: price_typeMethods.save,
  },
  {
    path: "/price_type/delete",
    method: "post",
    allowedRoles: ["admin"],

    action: price_typeMethods.delete,
  },
  {
    path: "/price_type/findBy",
    method: "post",
    allowedRoles: ["admin"],

    action: price_typeMethods.findBy,
  },
  //need to use {"where": {"id": ""} for findBy id
];
