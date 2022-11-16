import express, { RequestHandler } from "express";
import { config } from "dotenv";
import { router } from "./routes";

const middleware: RequestHandler = (req, res, next) => {
  //@ts-ignore
  req.name = "middleware"
  next()
}

function main() {
  config()
  const app = express()
  app.use(express.json())
  app.use(middleware)
  app.use('/api', router)
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server running in the ${PORT}`)
  })
}

main()