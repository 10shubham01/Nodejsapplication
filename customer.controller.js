const Customer = require("./customer.model");
exports.getData = (req, res) => {
  Customer.fetchData((data) => {
    res.send(data);
  });
};
exports.getDataById = (req, res) => {
  Customer.fetchDataById(req.params.customerId, (data) => {
    res.send(data);
  });
};
exports.postData = (req, res) => {
  const newCustomer = {
    email: req.body.email,
    name: req.body.name,
    active: req.body.active,
  };
  Customer.createCustomer(newCustomer, (data) => {
    res.send(data);
  });
};
