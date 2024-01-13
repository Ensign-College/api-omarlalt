const express = require('express');
const app = express();
const port = 3002;

app.get('/boxes', (req, res) => {

  const boxes = [
    { color: 'black'},
    { color: 'white'},
    { color: 'blue' },
    { color: 'yellow'}
  ];
  res.json(boxes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});