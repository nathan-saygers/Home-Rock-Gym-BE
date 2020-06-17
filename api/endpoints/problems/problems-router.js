const router = require("express").Router();

const Problems = require("./problems-models");

router.get("/", (req, res) => {
  Problems.findAll()
    .then(problems => {
      res.status(200).json(problems)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: "There was an error getting all problems"
      })
    });
});

router.post("/", (req, res) => {
  const newProblem = req.body

  if (newProblem) {
    Problems.addProblem(newProblem)
      .then(problem => {
        res.status(201).json({...problem[0]})
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The server encountered an error adding your problem"
        })
      })
  } else {
    res.status(400).json({
      message: "New problems require name, difficulty, angle, and photo"
    })
  }
})

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    Problems.removeProblem(id)
      .then(bool => {
        if (bool > 0) {
          res.status(202).json({
            message: `problem ${id} deleted`
          })
        } else {
          res.status(400).json({
            message: `problem ${id} does not exist`
          })
        }
      })
  } else {
    res.status(400).json({
      message: "Problem ID required"
    })
  }
})

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const newProbInfo = req.body

  if (id && newProbInfo) {
    Problems.editProblem(id, newProbInfo)
      .then(bool => {
        if (bool > 0) {
          res.status(202).json({
            message: `Problem ${id} updated`
          })
        } else {
          res.status(404).json({
            message: `Problem ${id} does not exist`
          })
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: `An issue occurred updating problem ${id}`
        })
      })
  } else {
    res.status(400).json({ message: "Please provide a user ID and new Problem info"})
  }
});

module.exports = router;