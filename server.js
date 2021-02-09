const express = require('express');
// add more dependencies



const PORT = process.env.PORT || 5000;

const app = express();

//cors

app.use("/public", express.static(process.cwd() + "/public"));

//transporter code

//verify connection

//app.post

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});