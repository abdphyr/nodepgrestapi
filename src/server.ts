import express from "express";
import { config } from "dotenv";
import { router } from "./routes";

function main() {
  config()
  const app = express()

  app.use(express.json())
  app.use('/api', router)

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server running in the ${PORT}`)
  })
}

main()