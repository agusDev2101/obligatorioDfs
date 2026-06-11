import { Router } from "express";
import v1Routes from "./v1/index.js";
import { limiter } from "../middleware/rateLimiter.middleware.js";

const router = Router();

router.use("/v1", v1Routes);

export default router;
