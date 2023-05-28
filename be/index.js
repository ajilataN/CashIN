const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const accountSid = "AC06d52342f6376e3fa96f198682362c56";
const authToken = "267ef5bde0a6f093c162662050e67a92";
const client = require("twilio")(accountSid, authToken);
var cors = require("cors");
app.use(cors());

function generate(n) {
  var add = 1,
    max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

  if (n > max) {
    return generate(max) + generate(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10; // Math.pow(10, n) basically
  var number = Math.floor(Math.random() * (max - min + 1)) + min;

  return ("" + number).substring(add);
}
// Middleware for parsing JSON data
app.use(bodyParser.json());

// POST endpoint
app.post("/api/sendSms", (req, res) => {
  const numb = generate(5);

  client.messages
    .create({
      body: "Hello from Boshko and the girls this is your code:" + numb,
      from: "+12073674253",
      to: "+386 68 626 212",
    })
    .then((message) => res.json({ number: numb }));

  // Send a response
});

// Start the server
const port = 3000; // Choose the port you want to run your server on
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
