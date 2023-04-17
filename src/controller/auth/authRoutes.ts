import { authController, authMethods } from "./authController";

export const authRoutes = [
  {
    path: "/auth/login",
    method: "post",
    // allowedRoles: ["admin", "client"],
    action: authMethods.login,
  },
  {
    path: "/auth/register",
    method: "post",
    allowedRoles: ["admin"],

    action: authMethods.save,
  },
  {
    path: "/auth/check",
    method: "post",
    allowedRoles: ["admin", "client"],

    action: authMethods.check,
  },
];
