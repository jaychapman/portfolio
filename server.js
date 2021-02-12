const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require("dotenv").config();




const PORT = process.env.PORT || 5000;

const app = express();

//cors
app.use(cors({ origin: "* "}));

app.use("/public", express.static(process.cwd() + "/public"));

//transporter code
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    }
});

//verify connection
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    }else {
        console.log("server ready to take our messages")
    }
});

app.post("/send", (req, res) => {
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
        console.log(fields);
        Object.keys(fields).forEach(function (property) {
            data[property] = fields[property].toString();
        });
        console.log(data);
        const mail = {
            sender: data.formName,
            to: process.env.EMAIL,
            subject: 'Contact Form Submission',
            text: `Name: ${data.formName} \nPhone: ${data.formPhone} \nEmail: ${data.formEmail} \nMessage: ${data.message}`,
        };
        transporter.sendMail(mail, (err, res) => {
            if (err) {
                console.log('error');
                console.log(err);
                res.status(500).json("something went wrong");
            }else {
                console.log('success');
                res.status(200).json("success");
            }
        });
    });
});


app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
});

app.route("/thankyou").get(function (req, res) {
    res.sendFile(process.cwd() + "/public/thankyou.html");
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});