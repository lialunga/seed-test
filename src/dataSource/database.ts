import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "0010",
    database: "seed",
    migrations: ["**/dataSource/migrations/*.ts"],
    entities: ["./src/modules/**/model/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Conectado ao banco de dados!")
    })
    .catch((err) => {
    console.error("Error during Data Source initialization", err)
})

export { AppDataSource };