const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/pet.route')(app);
require('./server/config/mongoose.config')

app.listen(8000, () => {
    console.log("Server is listening at Port 8000")
})
