const { query } = require("../db/db.js");


// Get contacts
async function getContacts() {
   const retrieveContacts = await query ("SELECT * FROM contacts");
   return retrieveAuthors.rows;
}

module.exports = {
    getContacts,
};