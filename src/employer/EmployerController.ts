import { EmployerService } from "./EmployerService";
import {
  PostEmployer, GetEmployers,
  GetEmployer, PutEmployer, DeleteEmployer
} from "./EmployerModel";
import { validatorEmployer } from "./EmployerValidator";

export class EmployerController {
  public static getEmployers: GetEmployers = async (req, res) => {
    try {
      const employers = await EmployerService.getEmployers()
      res.status(200).json(employers.rows)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  public static postEmployer: PostEmployer = async (req, res) => {
    const { error } = validatorEmployer(req.body)
    if (error) {
      res.status(400).json({ message: error.details[0].message })
    }
    try {
      const newEmployer = await EmployerService.postEmployer(req.body)
      res.status(201).json(newEmployer.rows[0])
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  public static getEmployer: GetEmployer = async (req, res) => {
    try {
      const newEmployer = await EmployerService.getEmployer(req.params.id)
      if (newEmployer.rows.length === 0) {
        res.status(404).json({ message: 'Employer not found' })
      }
      res.status(200).json(newEmployer.rows[0])
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  public static putEmployer: PutEmployer = async (req, res) => {
    try {
      const updateEmployer = await EmployerService.putEmployer(req.body, req.params.id)
      if (updateEmployer.rows.length === 0) {
        res.status(404).json({ message: 'Employer not found' })
      }
      res.status(201).json(updateEmployer.rows[0])
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  public static deleteEmployer: DeleteEmployer = async (req, res) => {
    try {
      const deletedEmployer = await EmployerService.deleteEmployer(req.params.id)
      if (deletedEmployer.rows.length === 0) {
        res.status(404).json({ message: 'Employer not found' })
      }
      res.status(200).json(deletedEmployer.rows[0])
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}
