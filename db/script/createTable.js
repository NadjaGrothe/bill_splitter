import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS personnel (
    user_id SERIAL PRIMARY KEY,
    fullName VARCHAR(255),
    petsName VARCHAR(255), 
    petType VARCHAR(255),
    created timestamp not null default CURRENT_TIMESTAMP
);`

async function createTable() {
  const data = await query(sqlString);
  console.log(data, "data has been created");
}
createTable();
