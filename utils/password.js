/**
 * this file is to generate encrypted and check encrypted password
 */
const bcrypt = require("bcrypt");
const argon2 = require("argon2");


/*Function to generate a secure password*/
const generatePassword = async (plainTextPassword) => {
  const result = await bcrypt.hash(plainTextPassword, 10);
  return result;
};

/*Function to check if the crypted password match*/
const checkPassword = async (plainTextPassword, hashFromDB) => {
  const result = await bcrypt.compare(plainTextPassword, hashFromDB);
  return result;
};

module.exports = {
  generatePassword,
  checkPassword,
};
