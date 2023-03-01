import { Router } from "express";
import { sendEmailRouter } from "./sendEmailRouter";

const router = Router()

router.use(sendEmailRouter)

export { router }