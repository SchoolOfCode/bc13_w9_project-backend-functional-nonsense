const express = require("express");
const router = express.Router();
const db = require('../db/db.js');

const {
  getUsers,
  // getUserById,
  createUser,
  deleteUserById,
} = require("../models/usersModel.js");

router.get("/", async function (req, res) {
  if (req.query.name !== undefined) {
    const searchedUsers = await searchUserByName(req.query.name);
    return res.json({ success: true, payload: searchedUsers });
  }

  const users = await getUsers();
  res.json({ success: true, payload: users });
});

// router.get("/:id", async function (req, res) {
//   const user = await getUserById(req.params.id);
//   res.json({ success: true, payload: user });
// });

router.post("/", async function (req, res) {
  const data = req.body;
  const newUser = await createUser(data);
  res.json({ success: true, payload: newUser });
});

router.delete("/:id", async function (req, res) {
  const deletedUser = await deleteUserById(req.params.id);
  res.json({ success: true, payload: deletedUser });
});

module.exports = router;