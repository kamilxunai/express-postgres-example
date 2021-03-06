import express from "express"
import cors from "cors"
import { createConnection } from "typeorm"
import "reflect-metadata";
import songs from "../src/routes/song/song.controller"

;(async () => {
  try {
    await createConnection()
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use("/api", songs)
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${process.env.SERVER_PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
})()
