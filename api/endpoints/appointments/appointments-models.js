const db = require("../../../database/dbConfig");

module.exports = {
  findAll,
  findByAppointmentID,
  addAppointment,
  editAppointment,
  removeAppointment,
}

function findAll() {
  return db("appointments")
}

function findByAppointmentID(id) {
  return db
    .select("*")
    .from("appointments")
    .where({ id })
}

async function addAppointment(newAppointment) {
  const id = await db("appointments")
    .insert(newAppointment)
    .returning("id")

  return findByAppointmentID(id[0])
}

function removeAppointment(id) {
  return db("appointments")
    .where({ id })
    .del();
}

function editAppointment(id, newAppointmentInfo) {
  return db("appointments")
    .where({ id })
    .update(newAppointmentInfo)
}