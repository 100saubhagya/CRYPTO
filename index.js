const express = require("express");
const app = express();
const port = 3000;
var request = require('request')
var multer = require('multer');
var upload = multer();
const bodyParser = require('body-parser');


app.use (bodyParser.json());// 
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(_dirname + `/public`));
app.set("view engin", "ejs");
app.use(uplaod.array());


let mData =""

const request = require("request");
request(`https://api.coingecko.com/api/v3/coins/bitcoin`,
  function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
  }
);

var data = "dashboard";
var data2 = 123;

app.get("/", (req, res) => {
  res.render("index", { data });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
