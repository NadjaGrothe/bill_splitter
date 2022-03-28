import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS recurring (
    rec_exp_id SERIAL PRIMARY KEY,
    rec_exp_name VARCHAR(255),
    rec_exp_amount DECIMAL 
);`

async function createTable() {
  const data = await query(sqlString);
  console.log(data, "data has been created");
}
createTable();
