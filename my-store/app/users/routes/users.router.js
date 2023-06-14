/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const { getAllUsers, userExist, getFilteredUser } = require('../middlewares/getUsers');

router.get('/', getAllUsers);

router.get('/:id', (req, res) => {
  const { id } = req.params;
  try {
    if (userExist(id)) {
      const getUser = getFilteredUser(id);
      res.json(getUser);
    } else throw new Error();
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error trying to Get Users' });
  }
});

module.exports = router;
