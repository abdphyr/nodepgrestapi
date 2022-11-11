import { pool } from "../config/db";
import { IJob } from "./JobModel";
import { EmployerService } from "../employer/EmployerService";

export class JobService {
  public static async getJobs() {
    return pool.query<IJob>("SELECT * FROM job")
  }
  public static async postJob(title: string) {
    return pool.query<IJob, [string]>(`
    INSERT INTO job (title) VALUES ($1) RETURNING *`,
      [title]
    )
  }
  public static async getJob(id: string) {
    return pool.query<IJob, [string]>(`SELECT * FROM job WHERE id=$1`, [id])
  }
  public static async deleteJob(id: string) {
    const deletedEmployer = await EmployerService.deleteEmployer('1', id)
    return await pool.query<IJob, [string]>(`
      DELETE FROM job WHERE id=$1 RETURNING *
    `, [id])
  }
}
