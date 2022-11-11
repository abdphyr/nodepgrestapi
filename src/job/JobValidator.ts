import Joi from "joi";
import { IJob } from "./JobModel";

export const validatorJob = (reqBody: Omit<IJob, "id">) => {
  const job = Joi.object({
    title: Joi.string().min(3).max(80).required()
  })
  return job.validate(reqBody)
}