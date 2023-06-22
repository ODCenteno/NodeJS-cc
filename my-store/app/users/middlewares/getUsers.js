// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios').default;

const endpointUri = 'https://api.escuelajs.co/api/v1/users';

let usersList;

const getAllUsers = async (req, res) => {
  try {
    const response = await axios.get(endpointUri);
    const usersData = await response.data;
    usersList = usersData;
    res.json(usersData);
    // return users;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error trying to Get Users' });
  }
};

const getFilteredUser = async (id) => {
  const filteredUser = usersList.filter((user) => user.id === id);
  return filteredUser;
};

module.exports = { getAllUsers, usersList, getFilteredUser };
