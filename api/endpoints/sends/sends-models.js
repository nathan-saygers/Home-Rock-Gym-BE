const db = require("../../../database/dbConfig")

module.exports = {
  findAll,
  findBySendID,
  addSend,
  removeSend,
  editSend
}

function findAll() {
  return db("sends")
}

function findBySendID(id) {
  return db
    .select("*")
    .from("sends")
    .where({ id })
}

async function addSend(newSendInfo) {
  const id = await db("sends")
    .insert(newSendInfo)
    .returning("id")
  
  return findBySendID(id[0])
}

function removeSend(id) {
  return db("sends")
    .where({ id })
    .del()
}

function editSend(id, newSendInfo) {
  return db("sends")
    .where({ id })
    .update(newSendInfo)
}

