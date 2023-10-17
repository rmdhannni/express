const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors())

const mhsRouter = require("./router/mahasiswa.js");
const jurusanRouter = require("./router/jurusan.js");
//res.send('halo lovedek')

//app.listen(port, () => {
//console.log(`aplikasi berjalan di http://locallhost:${port}`);
//});

const bodyPs = require("body-parser");
app.use(bodyPs.urlencoded({ extended: false }));
app.use(bodyPs.json());

app.use("/api/mhs", mhsRouter);
app.use("/api/jurusan", jurusanRouter);

app.listen(port, () => {
  console.log(`aplikasi berjalan di http::/localhost:${port}`);
});
