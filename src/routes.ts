import { clientRoutes } from "./controller/client/clientRoutes";
import { projetRoutes } from "./controller/projet/projetRoutes";



export const AppRoutes = [
...clientRoutes,
...projetRoutes,
]