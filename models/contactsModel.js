const { query } = require("../db/db.js");

async function getContacts() {
    const retrieveContacts = await query ("SELECT * FROM contacts");
    return retrieveContacts.rows;
}

async function createNewContact() {
    const createContact = await query ('INSERT INTO contacts (name, twitter, linked_in, facebook, slack, email) VALUES ($1, $2, $3, $4, $5, $6)');
    const newContact = createContact.rows[0];
    return newContact;
}

module.exports = {
    getContacts,
    createNewContact
};