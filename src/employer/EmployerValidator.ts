import Joi from "joi";
import { IEmployer } from "./EmployerModel";

export const validatorEmployer = (reqBody: IEmployer) => {
  const employer = Joi.object({
    name: Joi.string().min(5).max(80).required(),
    degree: Joi.string().min(5).max(80).required(),
    salary: Joi.number().greater(0).less(Infinity).required(),
    job_id: Joi.number().greater(0).less(Infinity).required()
  })
  return employer.validate(reqBody)
}