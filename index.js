const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { router } = require('./routes')

const app = express();
const apiPort = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(bodyParser.json());
//localhost:8080/
app.use('/api', router);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));