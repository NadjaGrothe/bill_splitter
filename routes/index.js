import express from "express";
import { getAllData, createNewData,updateTable,deleteTable } from "../models/index.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const data = await getAllData()
  res.json({
    success : true,
    payload : data
  })
});

router.post("/", async function (req, res) {
  const body = req.body
  const create = await createNewData(body)
  res.json({
    success : true,
    payload : create,
  })
});

router.put("/:id", async function(req,res){
const body = req.body
const update = await updateTable(body)
res.json({
  success: true,
  payload: update
})
});

router.delete("/:id", async function(req,res){
  const id = Number(req.params.id)
  const body = await deleteTable(id)
  res.json({
    success: true,
    payload: body
  })
})



export default router;
