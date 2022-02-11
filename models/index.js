import query from "../db/index.js"

export async function gettAllData(){
    const data = await query(`SELECT * FROM personnel`)
    return data.rows
}

export async function createNewData(body){
const fullname = body.fullname;
const petsname = body.petsname;
const pettype = body.pettype;
const res = await query(
    `INSERT INTO personnel(fullName,petsName,petType)VALUES($1, $2, $3) RETURNING fullName`,
    [fullname, petsname, pettype]
  );
 return res.rows
}

export async function updateTable(body){
    const fullname = body.fullname;
    const petsname = body.petsname;
    const pettype = body.pettype;
    const user_id = body.user_id;
    const res = await query(
        `UPDATE personnel
        SET fullName = $1, petsName= $2, petType= $3
        WHERE user_id = $4;`,
        [fullname, petsname, pettype, user_id]
      );
     return res.rows
}

export async function deleteTable(id){
    const res = await query(
        `DELETE FROM personnel WHERE user_id = $1;`,
        [id]
      );
     return res.rows
}