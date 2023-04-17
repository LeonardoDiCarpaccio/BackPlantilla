import { Request, Response } from "express";
import { clientRoutes } from "./controller/client/clientRoutes";
import { commandRoutes } from "./controller/command/commandRoutes";
import { itemRoutes } from "./controller/item/itemRoutes";
import { roleRoutes } from "./controller/role/roleRoutes";
import { statusRoutes } from "./controller/status/statusRoutes";
import { authRoutes } from "./controller/auth/authRoutes";
import { patientRoutes } from "./controller/patient/patientRoutes";
import { price_typeRoutes } from "./controller/price_type/price_typeRoutes";

// Define the Route interface
interface Route {
  path: string;
  method: string;
  action: (request: Request, response: Response) => Promise<any>;
  allowedRoles?: string[];
  apiKeyRequired?: boolean; // Change this to boolean
}
// Type your routes using the Route interface
const allRoutes: Route[] = [
  ...clientRoutes,
  ...patientRoutes,
  ...statusRoutes,
  ...roleRoutes,
  ...itemRoutes,
  ...commandRoutes,
  ...authRoutes,
  ...price_typeRoutes,
];

export const AppRoutes = allRoutes;
