import { pool } from "./database";
import { join } from "path";
import { readFile } from "fs";

const EMPLOYER_PATH = join(__dirname, '/sql/employer.sql')
const JOB_PATH = join(__dirname, '/sql/job.sql')

function pg() {
  try {
    readFile(JOB_PATH, 'utf8', async (err, JOB_SQL) => {
      if (err) throw err;
      await pool.query(JOB_SQL);
    })
    readFile(EMPLOYER_PATH, 'utf8', async (err, EMPLOYER_SQL) => {
      if (err) throw err;
      await pool.query(EMPLOYER_SQL);
    })
  } catch (e) {
    console.log(e)
  }
}
pg()