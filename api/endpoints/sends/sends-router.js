const router = require("express").Router();

const Sends = require("./sends-models");

router.get("/", (req, res) => {
  Sends.findAll()
    .then(sends => {
      res.status(200).json(sends)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: "There was an error fetching sends"
      })
    })
})

router.post("/", (req, res) => {
  const newSend = req.body
  
  if (newSend) {
    Sends.addSend(newSend)
      .then(send => {
        res.status(200).json(send[0])
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "Something went wrong recording your send bra"
        })
      })
  } else {
    res.status(400).json({
      message: "Send data is required when adding a new send"
    })
  }
})

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    Sends.removeSend(id)
      .then(bool => {
        if (bool > 0) {
          res.status(201).json({
            message: `Send ${id} deleted`
          })
        } else {
          res.status(400).json({
            message: `No send with id ${id} found`
          })
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The server encountered an issue deleting that send"
        })
      })
  } else {
    res.status(400).json({
      message: "Id is required when deleting a send"
    })
  }
})

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const newSendData = req.body

  if (id && newSendData) {
    Sends.editSend(id, newSendData)
      .then(bool => {
        if (bool > 0) {
          res.status(201).json({
            message: `Send ${id} updated!`
          })
        } else {
          res.status(400).json({
            message: `No send with id ${id} was found`
          })
        }
      })
      .catch(error => {
        console.log(error)
        res.status.json({
          message: `The server encountered an issue editing your send`
        })
      })
  } else {
    res.status(400).json({
      message: "id and new send info are required fields"
    })
  }
})

module.exports = router;