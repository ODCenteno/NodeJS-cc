/* eslint-disable import/no-extraneous-dependencies */
const process = require('process');
const app = require('./index');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
