import { RequestHandler } from "express";

export interface IEmployer {
  id: number;
  name: string;
  degree: string;
  salary: number;
  job_id: number;
}

export type PostEmployer = RequestHandler<
  { [key: string]: string; },
  IEmployer | { message: string },
  IEmployer
>

export type GetEmployers = RequestHandler<
  { [key: string]: string; },
  IEmployer[] | { message: string },
  any
>

export type GetEmployer = RequestHandler<
  { empId: string },
  IEmployer | { message: string },
  any
>

export type PutEmployer = RequestHandler<
  { empId: string },
  IEmployer | { message: string },
  IEmployer
>

export type DeleteEmployer = RequestHandler<
  { empId: string },
  IEmployer | { message: string },
  any
>
