import { Pool } from "pg";

// export const pool = new Pool({
//   user: process.env.DB_USERNAME,
//   password: String(process.env.DB_PASSWORD),
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT)
// })

export const pool = new Pool({
  user: 'nodepg',
  host: 'localhost',
  database: 'employer',
  password: 'nodepg',
  port: 5430,
})