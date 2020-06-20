const router = require("express").Router();

const Appointments = require("./appointments-models");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Appointments.findByAppointmentID(id)
    .then(user =>{
      res.status(200).json(user)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: `There was an error getting appointment ${id}`
      })
    });
});

router.post("/", (req, res) => {
  const newAppointment = req.body;

  if(newAppointment.user && newAppointment.climb_date) {
    Appointments.addAppointment(newAppointment)
      .then(appointment => {
        res.status(201).json({...appointment[0]})
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "There was an issue creating this appointment"
        })
      })
  } else {
    res.status(400).json({
      message: "user and appointment date are required"
    });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    Appointments.removeAppointment(id)
      .then(bool => {
        if (bool > 0) {
          res.status(202).json({
            message: `Appointment ${id} deleted`
          })
        } else {
          res.status(404).json({
            message: `Appointmnet ${id} does not exist`
          })
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: `Something went wrong deleting appointment ${id}`
        })
      })
  } else {
    res.status(400).json({
      message: "An ID is required for deleting an appointment"
    });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const newAppData = req.body;
  
  if (id && newAppData) {
    Appointments.editAppointment(id, newAppData)
      .then(bool => {
        if(bool > 0) {
          res.status(201).json({
            message: `Appointment ${id} updated`
          })
        } else {
          res.status(500).json({
            message: `Something went wrong updating appointment ${id}`
          })
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The server encountered an issue updating"
        })
      })
  } else {
    res.status(400).json({ message: "Appointment ID and new appointment data must be provided"})
  }
})

module.exports = router;