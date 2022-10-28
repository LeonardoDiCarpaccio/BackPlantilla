import { clientRoutes } from "./controller/client/clientRoutes";
import { projetRoutes } from "./controller/projet/projetRoutes";
import { roleRoutes } from "./controller/role/roleRoutes";
import { userRoutes } from "./controller/user/userRoutes";



export const AppRoutes = [
...clientRoutes,
...projetRoutes,
...userRoutes,
...roleRoutes
]