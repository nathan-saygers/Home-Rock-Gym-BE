const db = require("../../../database/dbConfig")

module.exports = {
  findAll,
  findBySendID,
  addSend,
  removeSend,
  editSend
}

function findAll() {
  return db("users")
}

function findBySendID(id) {
  return db
    .select("*")
    .from("users")
    .where({ id })
}

async function addSend(newSendInfo) {
  const id = await db("users")
    .insert(newSendInfo)
    .returning("id")
  
  return findBySendID(id[0])
}

function removeSend(id) {
  return db("users")
    .where({ id })
    .del()
}

function editSend(id, newSendInfo) {
  return db("users")
    .where({ id })
    .update(newSendInfo)
}

