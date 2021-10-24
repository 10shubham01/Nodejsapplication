const elephant = require("./db");
const fetchQuery = {
  name: "fetch-customer",
  text: "SELECT * FROM customers",
};
const insertQuery = {
  name: "create-customer",
  text: "INSERT INTO customers (email,name,active) VALUES($1,$2,$3) RETURNING *",
};
const fetchByIdQuery = {
  name: "fetch-customer-by-id",
  text: "SELECT * FROM customers WHERE id = $1",
};
exports.fetchData = (result) => {
  elephant
    .query(fetchQuery)
    .then((res) => result(res.rows))
    .catch((e) => result(e));
};
exports.fetchDataById = (customerId, result) => {
  elephant
    .query(fetchByIdQuery, [customerId])
    .then((res) => result(res.rows))
    .catch((e) => result(e));
};
exports.createCustomer = (newCustomer, result) => {
  elephant
    .query(insertQuery, [
      newCustomer.email,
      newCustomer.name,
      newCustomer.active,
    ])
    .then((res) => result(res.rows))
    .catch((e) => result(e));
};
