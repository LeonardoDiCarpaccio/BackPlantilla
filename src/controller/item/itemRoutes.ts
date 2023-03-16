import { itemMethods } from "./itemController";

export const itemRoutes = [
  {
    path: "/item/get-all",
    method: "post",
    action: itemMethods.getAll,
  },
  {
    path: "/item/findBy",
    method: "post",
    action: itemMethods.findBy,
  },
  {
    path: "/item/save",
    method: "post",
    action: itemMethods.save,
  },
  {
    path: "/item/delete",
    method: "post",
    action: itemMethods.delete,
  },
];
