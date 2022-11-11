import { Router } from "express";
import { JobController } from "./JobController";

export class JobRouter {
  private static readonly router = Router()
  public static get routes() {
    this.router
      .route("/")
      .get(JobController.getJobs)
      .post(JobController.postJob)
    this.router
      .route("/:id")
      .get(JobController.getJob)
      .delete(JobController.deleteJob)
    return this.router
  }
}