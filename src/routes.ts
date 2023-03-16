import { clientRoutes } from "./controller/client/clientRoutes";
import { commandRoutes } from "./controller/command/commandRoutes";
import { itemRoutes } from "./controller/item/itemRoutes";
import { roleRoutes } from "./controller/role/roleRoutes";
import { statusRoutes } from "./controller/status/statusRoutes";
import { authRoutes } from "./controller/auth/authRoutes";
import { patientRoutes } from "./controller/patient/patientRoutes";
export const AppRoutes = [
  ...clientRoutes,
  ...patientRoutes,
  ...statusRoutes,
  ...roleRoutes,
  ...itemRoutes,
  ...commandRoutes,
  ...authRoutes,
];
