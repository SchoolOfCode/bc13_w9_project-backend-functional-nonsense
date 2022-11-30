const express = require("express");
const router = express.Router();
const db = require('../db/db.js');

/**
 * Deconstructing the user functions from the userModels file so we can use them in our routers
 */
const {
  getUsers,
  // getUsersAndContacts,
  // getUserById,
  createUser,
  // deleteUserById,
} = require("../models/usersModel.js");


/** 
 * get router for our users it will return all of the users on the database
 */
router.get("/", async function (req, res) {
  const users = await getUsers();
  res.json({ success: true, payload: users });
});


/** 
 * post router awaiting the createUser function to post the new user to the database
 */
router.post("/", async function (req, res) {
  const user = req.body;
  const newUser = await createUser(user);
  res.json({ success: true, payload: newUser });
});


// The two commented out routers below are for later stretch goals incase we wanted to add this functionality to the project futher down the road where we could get a specific user by their specific data value and the other router being the ability to delete some of the users that have been returned by a search ressult.

// router.get("/:id", async function (req, res) {
//   const user = await getUserById(req.params.id);
//   res.json({ success: true, payload: user });
// });


// router.delete("/:id", async function (req, res) {
//   const deletedUser = await deleteUserById(req.params.id);
//   res.json({ success: true, payload: deletedUser });
// });

module.exports = router;