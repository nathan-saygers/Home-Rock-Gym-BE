const db = require("../../../database/dbConfig")

module.exports = {
  findAll,
  addProblem,
  removeProblem,
  editProblem,
  findFavProblems,
  addFavProblem,
  findFavProblemById,
  removeFavProblem
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

async function addProblem(newProblem) {
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

// Find fav_problem by primary key

function findFavProblemById(id) {
  return db
    .select("*")
    .from("favorited_problems")
    .where({ id })
}

// Query utilizing favorite_problems bridge table to show 
// user's fav problems

function findFavProblems(user_id) {
  return db.select("p.id", "fp.user")
    .from("problems as p")
    .join("favorited_problems as fp", "fp.problem_id", "p.id")
    .where("fp.user", user_id)
}

// Function for adding entries to the favorite_problems table

async function addFavProblem(user_id, problem_id) {
  const newEntry = await db("favorited_problems")
    .insert({"user": user_id, "problem_id": problem_id})
    .returning("id")

  return findFavProblemById(newEntry[0])
}

// Function for deleting a favorited_problem

function removeFavProblem(id) {
  return db("favorited_problems")
    .where({ id })
    .del();
}
