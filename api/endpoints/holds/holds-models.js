const db = require("../../../database/dbConfig");

module.exports = {
  findAll,
  findById,
  addHold,
  removeHold,
  editHold
}

function findAll() {
  return db("holds")
}

function findById(id) {
  return db
    .select("*")
    .from("holds")
    .where({ id })
}

async function addHold(newHold) {
  const id = await db("holds")
    .insert(newHold)
    .returning("id")

  return findById(id[0])
}

function removeHold(id) {
  return db("holds")
    .where({ id })
    .del();
}

function editHold(id, newHoldInfo) {
  return db("holds")
    .where({ id })
    .update(newHoldInfo)
}