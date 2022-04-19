const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
  extended: false,
  // limit: 52428800,
  // parameterLimit: 5000
});

module.exports = {
  jsonParser,
  urlEncodedParser
};
