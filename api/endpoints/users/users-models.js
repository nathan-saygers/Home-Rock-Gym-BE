const db = require("../../../database/dbConfig");

module.exports = {
  findAll,
  findById,
  addUser,
  removeUser,
  editUser,
  findByUsername
}

function findAll() {
  return db("users");
}

function findById(id) {
  return db
    .select("id", "username")
    .from("users")
    .where({ id });
}

async function addUser(newUser) {
  const id = await db("users")
    .insert(newUser)
    .returning("id");

  return findById(id[0]);
}

function removeUser(id) {
  return db("users")
    .where({ id })
    .del();
}

function editUser(id, newUserData) {
  return db("users")
    .where({ id })
    .update(newUserData);
}

async function findByUsername(username) {
  const user = await db
    .select("*")
    .from("users")
    .where("username", username)

  return user[0];
}