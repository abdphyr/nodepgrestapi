import { pool } from "../config/db"
import { IEmployer } from "./EmployerModel"

export class EmployerService {
  public static async getEmployers() {
    return await pool.query<IEmployer>("SELECT * FROM employer")
  }
  public static async postEmployer(employer: Omit<IEmployer, "id">) {
    const { name, degree, salary, job_id } = employer
    return await pool.query<IEmployer, Array<IEmployer[keyof IEmployer]>>(`
      INSERT INTO employer (name, degree, salary, job_id) 
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, degree, salary, job_id]
    )
  }
  public static async getEmployer(id: string) {
    return await pool.query<IEmployer, [string]>(`
    SELECT * FROM employer LEFT JOIN job ON job.id = employer.job_id 
    WHERE employer.id=$1`, [id])
  }
  public static async putEmployer(employer: Omit<IEmployer, "id">, paramid: string) {
    const oldEmployer = await this.getEmployer(paramid)
    const { name, degree, salary, job_id } = employer
    return await pool.query<IEmployer, Array<IEmployer[keyof IEmployer]>>(`
    UPDATE employer SET name=$1, degree=$2, salary=$3, job_id=$4 WHERE id=$5 RETURNING *
  `,
      [
        name ?? oldEmployer.rows[0].name,
        degree ?? oldEmployer.rows[0].degree,
        salary ?? oldEmployer.rows[0].salary,
        job_id ?? oldEmployer.rows[0].job_id,
        paramid
      ]
    )
  }
  public static async deleteEmployer(id: string, job_id?: string) {
    return await pool.query<IEmployer, [string]>(`
    DELETE FROM employer WHERE ${job_id ? 'job_id=$1' : 'id=$1'}`, [job_id ?? id])
  }
}