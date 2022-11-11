import { RequestHandler } from "express";

export interface IJob {
  id: number;
  title: string;
}

export type GetJobs = RequestHandler<
  { [key: string]: string; },
  IJob[] | { message: string },
  IJob
>

export type PostJob = RequestHandler<
  { [key: string]: string; },
  IJob | { message: string },
  IJob
>

export type DeleteJob = RequestHandler<
  { [key: string]: string; },
  IJob | { message: string },
  any
>
