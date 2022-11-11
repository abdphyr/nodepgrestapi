import { Router } from "express";
import { EmployerController } from "./EmployerController";

export class EmployerRouter {
  private static readonly router = Router()
  public static get routes() {
    this.router
      .route("/")
      .get(EmployerController.getEmployers)
      .post(EmployerController.postEmployer)
    this.router
      .route("/:id")
      .get(EmployerController.getEmployer)
      .put(EmployerController.putEmployer)
      .delete(EmployerController.deleteEmployer)
    return this.router
  }
}