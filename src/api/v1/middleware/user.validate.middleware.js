import { userCreateBodySchema, userLoginBodySchema } from "../schemas/user.schemas.js";
import { validate } from "./validate.middleware.js";



export const validateBodyCreate = validate(userCreateBodySchema, "body");

//podemos pasarlo a auth.validate
export const validateBodyLogin = validate(userLoginBodySchema, "body");

