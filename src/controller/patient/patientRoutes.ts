import { patientMethods } from "./patientController";

export const patientRoutes = [
  {
    path: "/patient/get-all",
    method: "post",
    allowedRoles: ["admin", "client"],
    action: patientMethods.getAll,
  },
  {
    path: "/patient/findBy",
    method: "post",
    allowedRoles: ["admin", "client"],
    action: patientMethods.findBy,
  },
  {
    path: "/patient/save",
    method: "post",
    allowedRoles: ["admin"],

    action: patientMethods.save,
  },
  {
    path: "/patient/delete",
    method: "post",
    allowedRoles: ["admin"],
    action: patientMethods.delete,
  },
];
