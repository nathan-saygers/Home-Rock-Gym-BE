const router = require("express").Router();

const Users = require("./users-models");

router.post("/new_user", (req, res) => {
  const newUser = req.body;
  
  if (newUser.username) {
    Users.addUser(newUser)
      .then(user => {
        res.status(201).json({...user[0]})
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The server encountered an error creating a new user"
        })
      })
  } else {
    res.status(400).json({
      message: "A username is required to create a new user"
    });
  }
});

router.post("/login", (req, res) => {
  let { username } = req.body;

  Users.findByUsername(username)
    .then(user => {
      if(user) {
        const userIdent = user.id;

        res.status(200).json({ userIdent })
      } else {
        res.status(401).json({ message: "No record of that username"})
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: "The server encountered and error logging in your user"
      })
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: "There was an error getting this user"
      })
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    Users.removeUser(id)
      .then(bool => {
        if (bool > 0) {
          res.status(202).json({ message: `user with id ${id} was deleted`});
        } else {
          res.status(404).json({ message: `user with id ${id} doesn't exist`});
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The server encountered an error deleting this user"
        });
      });
  } else {
    res.status(400).json({
      message: "Please provide a user ID"
    })
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const newUserData = req.body;

  if (id && newUserData) {
    Users.editUser(id, newUserData)
      .then(bool => {
        if (bool > 0) {
          res.status(202).json({ message: `userID ${id} updated`})
        } else {
          res.status(404).json({ message: `update failed: no userID ${id}`})
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "An issue occurred editing user"
        })
      })
  } else {
    res.status(400).json({ message: "No user ID provided"})
  }
})

module.exports = router;