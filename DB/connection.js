import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('blogSystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export const connectDB = async (req, res) => {
    return await sequelize.sync({ alter: false })
        .then(result => {
            console.log("db connected");
            console.log(result);
        }).catch(err => {
            console.log(`Error while connecting to db ${err}`);
        })
}


