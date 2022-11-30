const { query } = require("../db/db.js");

/**
 * 
 * @returns all the contact details of the users registered on our database
 */
async function getContacts() {
    const retrieveContacts = await query ("SELECT * FROM contacts");
    return retrieveContacts.rows;
}

/**
 * 
 * @param {data} data 
 * @returns the created contact data of the new user who has visted the site
 */
async function createNewContact(data) {
    const createContact = await query ('INSERT INTO contacts (name, twitter, linked_in, facebook, slack, email) VALUES ($1, $2, $3, $4, $5, $6)', [data.name, data.twitter, data.linked_in, data.facebook, data.slack, data.email]);
    const newContact = createContact.rows[0];
    return newContact;
}

// Exporting the module fuctions
module.exports = {
    getContacts,
    createNewContact
};