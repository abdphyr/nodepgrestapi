import { Router } from "express";
import { EmployerRouter } from "../employer/EmployerRouter";
import { JobRouter } from "../job/JobRouter";

const router = Router()
  .use("/jobs", JobRouter.routes)
  .use("/employers", EmployerRouter.routes)
export { router }
