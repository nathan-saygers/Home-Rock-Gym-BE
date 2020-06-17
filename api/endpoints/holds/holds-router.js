const router = require("express").Router();

const Holds = require("./holds-models");

router.get("/", (req, res) => {
  Holds.findAll()
    .then(holds => {
      res.status(200).json({holds})
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: "The server encountered an issue getting all holds"
      })
    })
})

router.post("/", (req, res) => {
  const newHold = req.body;

  if (newHold) {
    Holds.addHold(newHold)
      .then(hold => {
        res.status(201).json({...hold[0]})
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The server encountered an issue adding your hold"
        })
      })
  } else {
    res.status(400).json({
      message: "Name and photo are required to make a new hold"
    })
  }
})

router.delete("/:id", (req, res) => {
  const id = req.params.id

  if (id) {
    Holds.removeHold(id)
      .then(bool => {
        if (bool > 0) {
          res.status(202).json({
            message: `hold ${id} delete`
          })
        } else {
          res.status(404).json({
            message: `hold ${id} does not exist`
          })
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: `The server encountered an issue deleting hold ${id}`
        })
      })
  } else {
    res.status(400).json({
      message: "Please provide a hold id"
    })
  }
})

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const newHoldInfo = req.body;

  if(id && newHoldInfo) {
    Holds.editHold(id, newHoldInfo)
      .then(bool => {
        if (bool > 0) {
          res.status(202).json({
            message: `Hold ${id} updated`
          })
        } else {
          res.status(404).json({
            message: `update failed, no hold id ${id}`
          })
        } 
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "An issue occurred while editing hold"
        })
      })
  } else {
    res.status(400).json({
      message: "No user ID or Hold Info provided"
    })
  }
})

module.exports = router;