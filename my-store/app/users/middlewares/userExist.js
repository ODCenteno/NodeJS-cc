const { usersList } = require('./getUsers');

const userExist = async (id) => {
  if (usersList !== undefined) {
    const exist = usersList.find((user) => user.id === id);
    return exist;
  }
  return false;
};

module.exports = userExist;
