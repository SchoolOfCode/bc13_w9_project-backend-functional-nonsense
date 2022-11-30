const { query } = require("../db/db.js");



/**
 * 
 * @returns all the users from the database and displays them onto our table in the frontend
 */
async function getUsers() {
  // Query the database and return all userSelect: 
  const result = await query("SELECT * FROM users");
  return result.rows;
}


/**
 * 
 * @param {user} user 
 * @returns created user to add to the database and all of the values of their inputs for the data
 */
async function createUser(user) {
  // Query the database to create an user and return the newly created user
  const result = await query(
    'INSERT INTO users (learning_style, mb_personality, religion, cultural_background, gender_id, sexuality, hobby) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [user.learning_style, user.mb_personality, user.religion, user.cultural_background, user.gender_id, user.sexuality, user.hobby]);
    const newUser = result.rows[0];
    return newUser;
  }
  module.exports = {
    getUsers,
    // getUsersAndContacts,
    // getUserById,
    createUser,
    // deleteUserById,
  };


//  The three functions that we would like to impliment as a stretch goal further down the line coming back to this project

// async function getUserById(id) {
//   // Query the database and return the user with a matching id
//   const result = await query('SELECT * FROM users WHERE id = $1', [id]);
//   const user = result.rows[0];
//   return user;
// }
  
// async function getUsersAndContacts() {
//   // Query the database and return all userSelect: 
//   const result = await query("SELECT * FROM users AND contacts");
//   return result.rows;
// }
  
// async function deleteUserById(id) {
//   // Query the database to delete an user and return the deleted user
//   const result = await query('DELETE FROM users AND contacts WHERE id = $1' [id]);
//   const user = result.rows[0];
//   return user;
// }
