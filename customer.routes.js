module.exports = (app) => {
  const customer = require("./customer.controller");
  app.get("/customer", customer.getData);
  app.get("/customer/:customerId", customer.getDataById);
  app.post("/customer/", customer.postData);
};
