import { app } from "./app";
import "./dataSource/database"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT || 3333;


app.listen(3333, () => console.log("Server running on port " + port + "!"))