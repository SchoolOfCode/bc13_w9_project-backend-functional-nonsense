const express = require("express");
const router = express.Router();
const db = require('../db/db.js');

const {
 getContacts,
 createNewContact
} = require("../models/contactsModel.js");


// Get route handler for contact by ID
// && allContacts if no id is provided
router.get("/", async function (req, res) {
        const allContacts = await getContacts();
        res.json(allContacts);
});

// Create Contacts
router.post("/", async function (req, res) {
    const data = req.body;
    const newContact = await createNewContact(data);
    res.json({ success: ture, payload: newContact})
});


module.exports = router;