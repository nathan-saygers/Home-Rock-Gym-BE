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

