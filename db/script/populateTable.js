import query from "../index.js";
import { data } from "../../dummyData.js";

async function populateTable() {
   for (let i = 0; i < data.length; i++) {
      const rec_exp_name = data[i].rec_exp_name;
      const rec_exp_amount = data[i].rec_exp_amount;
      const res = await query(
         `INSERT INTO personnel(rec_exp_name,rec_exp_amount)VALUES($1, $2) RETURNING *`,
         [rec_exp_name, rec_exp_amount]
      );

      console.log(res);
   }
}

populateTable();
