const express = require('express');
const app = express();
const apiPort = process.env.API_PORT || 3003;
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router)
app.listen(apiPort, () => console.log(`server running on port ${apiPort}`));