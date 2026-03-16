(async () => {
    const db = require("./db");
    const prods = await db.selectProdutos();
    console.log(prods);
})()