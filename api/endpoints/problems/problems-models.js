const db = require("../../../database/dbConfig")

module.exports = {
  findAll,
  addProblem,
  removeProblem,
  editProblem
}

function findAll() {
  return db("problems")
}

function findById(id) {
  return db
    .select("*")
    .from("problems")
    .where({ id })
}

function addProblem(newProblem) {
  const id = await db("problems")
    .insert(newProblem)
    .returning("id");

  return findById(id[0])
}

function removeProblem(id) {
  return db("problems")
    .where({ id })
    .del();
}

function editProblem(id, newProblemInfo) {
  return db("problems")
    .where({ id })
    .update(newProblemInfo)
}