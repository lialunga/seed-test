import { DataSource, DataSourceOptions } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

const options: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: ["./src/dataSource/migrations/*.ts"],
    entities: ["./src/models/*.ts"]
}

const AppDataSource = new DataSource(options)

AppDataSource.initialize()
    .then(() => {
        console.log("Conectado ao banco de dados!")
    })
    .catch((err) => {
    console.error("Error during Data Source initialization", err)
})

export { AppDataSource };