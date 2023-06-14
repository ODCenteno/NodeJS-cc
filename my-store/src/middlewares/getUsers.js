// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios').default;

const endpointUri = 'https://api.escuelajs.co/api/v1/users';

const getAllUsers = async (req, res) => {
  try {
    const response = await axios.get(endpointUri);
    const users = await response.data;
    res.json(users);
    // return users;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error trying to Get Users' });
  }
};

const userExist = async (id) => {
  const users = await getAllUsers();
  const exist = users.find((user) => user.id === id);
  return exist;
};

const getFilteredUser = async (id) => {
  const users = await getAllUsers();
  const filteredUser = users.filter((user) => user.id === id);
  return filteredUser;
};

module.exports = { getAllUsers, userExist, getFilteredUser };
