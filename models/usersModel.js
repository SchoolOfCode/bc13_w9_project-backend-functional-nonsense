const { query } = require("../db/db.js");

async function getUsers() {
  // Query the database and return all userSelect: 
  const result = await query("SELECT * FROM users");
  return result.rows;
}

// async function getUserById(id) {
//   // Query the database and return the user with a matching id
//   const result = await query('SELECT * FROM users WHERE id = $1', [id]);
//   const user = result.rows[0];
//   return user;
// }

async function createUser(user) {
  // Query the database to create an user and return the newly created user
  const result = await query('INSERT INTO users (learning_style, mb_personality, religion, cultural_background, gender_id, sexuality, hobby) VALUES ($1, $2, $3, $4, $5, $6, $7)' [user[0]] [user[1]] [user[2]] [user[3]] [user[4]] [user[5]] [user[6]]);
  const newUser = result.rows[0];
  return newUser;
}

async function deleteUserById(id) {
  // Query the database to delete an user and return the deleted user
  const result = await query('DELETE FROM users WHERE id = $1' [id]);
  const user = result.rows[0];
  return user;
}

module.exports = {
  getUsers,
  // getUserById,
  createUser,
  deleteUserById,
};