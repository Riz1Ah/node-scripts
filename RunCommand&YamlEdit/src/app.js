
const logger = require('morgan');
const express = require('express');
const routes = require('../controllers/main-controller');
const bodyParser = require('body-parser')
const cors = require('cors');


const PORT = process.env.PORT || 9999;
const app = express();
app.use(cors());
app.use(logger('dev'))

app.use(bodyParser.json())

app.use('/api', routes)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
