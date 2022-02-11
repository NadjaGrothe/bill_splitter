import query from "../index.js";
import { data } from "../../dummyData.js";

async function populateTable() {
  for (let i = 0; i < data.length; i++) {
    const fullName = data[i].fullName;
    const petsName = data[i].petsName;
    const petType = data[i].petType;
    const res = await query(
      `INSERT INTO personnel(fullName,petsName,petType)VALUES($1, $2, $3) RETURNING fullName`,
      [fullName, petsName, petType]
    );

    console.log(res);
  }
}

populateTable();
