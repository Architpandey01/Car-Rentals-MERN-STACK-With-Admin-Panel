const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "add_yours",
  client_id: "add_yours",
  client_secret: "add_yours",
});

module.exports = paypal;
