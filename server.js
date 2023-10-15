const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({ origin: "*" }));
  app.use(express.static(path.join(__dirname, './build')));

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(5055, (err) => {
    if (err) throw err;
    console.log('Server is running on port 5055');
  });
});
