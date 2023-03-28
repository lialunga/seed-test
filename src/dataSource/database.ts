import { DataSource, DataSourceOptions } from "typeorm"

const options: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: "postgres",
    password: "0010",
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