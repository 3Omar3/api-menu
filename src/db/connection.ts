import mysql from "promise-mysql"

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "restaurant"
});

const getConnection = () => {
    return conn;
}

export default getConnection;