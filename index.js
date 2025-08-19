const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static(__dirname));



app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



























