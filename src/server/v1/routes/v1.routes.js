import { Router } from "express";
import v1UserRoutes from "./v1.user.routes.js";
import v1AuthRoutes from "./v1.auth.routes.js";
const v1Routes = Router();

// v1Routes.use("/auth", v1AuthRoutes); //esto es publico

// //para consultar aca si necesito estar logueado o sea son privadas


// v1Routes.use("/todos", v1TodosRoutes); 



v1Routes.use("/users", v1UserRoutes);
v1Routes.use("/auth", v1AuthRoutes);

export default v1Routes;