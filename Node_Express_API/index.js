const bodyParser = require('body-parser');
const { json } = require('express');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors())

app.use(bodyParser.json());

app.use('/',(req,res)=>{
    res.json({
        msg:'Work'
    })
});

app.listen(PORT, () => console.log('server running on port: http://localhost${PORT}'));