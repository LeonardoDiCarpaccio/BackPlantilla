import { commandMethods } from "./commandController";

export const commandRoutes = [
  {
    path: "/command/get-all",
    method: "post",
    action: commandMethods.getAll,
  },
  {
    path: "/command/findBy",
    method: "post",
    action: commandMethods.findBy,
  },
  {
    path: "/command/save",
    method: "post",
    action: commandMethods.save,
  },
  {
    path: "/command/delete",
    method: "post",
    action: commandMethods.delete,
  },
];
