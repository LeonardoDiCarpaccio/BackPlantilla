import { patientMethods } from "./patientController";

export const patientRoutes = [
  {
    path: "/patient/get-all",
    method: "post",
    action: patientMethods.getAll,
  },
  {
    path: "/patient/findBy",
    method: "post",
    action: patientMethods.findBy,
  },
  {
    path: "/patient/save",
    method: "post",
    action: patientMethods.save,
  },
  {
    path: "/patient/delete",
    method: "post",
    action: patientMethods.delete,
  },
];
