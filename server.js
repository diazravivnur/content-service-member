const express = require('express');
const app = express();
const cors = require('cors');
const router = require("./src/routers");
//env
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use("/api/v1/", router);
//port
const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Running on port ${port}`));