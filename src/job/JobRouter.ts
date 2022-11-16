import { Router } from "express";
import { JobController } from "./JobController";

export class JobRouter {
  private static readonly _router = Router()
  public static get routes() {
    this._router
      .route("/")
      .get(JobController.getJobs)
      .post(JobController.postJob)
    this._router
      .route("/:jobId")
      .get(JobController.getJob)
      .delete(JobController.deleteJob)
    return this._router
  }
}