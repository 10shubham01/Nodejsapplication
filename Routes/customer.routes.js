module.exports = (app) => {
  const customer = require("../Controller/customer.controller");
  app.get("/customer", customer.getData);
  app.get("/customer/:customerId", customer.getDataById);
  app.post("/customer/", customer.postData);
  app.put("/customer/:customerId", customer.updateData);
  app.delete("/customer/:customerId", customer.deleteDataById);
  app.delete("/customer/", customer.deleteAllData);
};
