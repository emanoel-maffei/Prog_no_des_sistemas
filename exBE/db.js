async function connect() {
    if (global.connection && global.connection.state !== "disconnected")
        return;
    
    const mysql = require("mysql/promisse");
    const connection = await mysql.createConnection(
        "mysql://root:root@localhost:3306/exmynode",
    );

    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectProdutos() {
    const conn = await connect();
    return await conn.query("SELECT * FROM produtos;");
}

module.exports = { selectProdutos }