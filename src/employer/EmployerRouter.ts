import { Router } from "express";
import { EmployerController } from "./EmployerController";


export class EmployerRouter {
  private static readonly _router = Router()
  public static get routes() {
    this._router
      .route("/")
      .get(EmployerController.getEmployers)
      .post(EmployerController.postEmployer)
    this._router
      .route("/:empId")
      .get(EmployerController.getEmployer)
      .put(EmployerController.putEmployer)
      .delete(EmployerController.deleteEmployer)
    return this._router
  }
}