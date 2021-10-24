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
const updateCustomerByIdQuery = {
  name: "update-customer-by-id",
  text: "UPDATE customers SET email = $1, name = $2, active = $3 WHERE id = $4 RETURNING *",
};
const deleteCustomerByIdQuery = {
  name: "Delete-customer-by-id",
  text: "DELETE FROM customers WHERE id = $1",
};
const deleteAllCustomerQuery = {
  name: "Delete-all-customer-by-id",
  text: "TRUNCATE customers RESTART IDENTITY",
};
/* -------------------------------------------------------------------------------------------------------------------------------- */
module.exports = {
  fetchData: (result) => {
    elephant
      .query(fetchQuery)
      .then((res) => result(res.rows))
      .catch((e) => result(e));
  },
  fetchDataById: (customerId, result) => {
    elephant
      .query(fetchByIdQuery, [customerId])
      .then((res) => result(res.rows))
      .catch((e) => result(e));
  },
  createCustomer: (newCustomer, result) => {
    elephant
      .query(insertQuery, [
        newCustomer.email,
        newCustomer.name,
        newCustomer.active,
      ])
      .then((res) => result(res.rows))
      .catch((e) => result(e));
  },
  updateCustomerById: (customerId, customer, result) => {
    elephant
      .query(updateCustomerByIdQuery, [
        customer.email,
        customer.name,
        customer.active,
        customerId,
      ])
      .then((res) => {
        if (res.rowCount == 0) {
          result({ error: "item_not_found" });
          return;
        } else {
          result(res.rows);
        }
      })
      .catch((e) => result(e));
  },
  deleteCustomerById: (customerId, result) => {
    elephant
      .query(deleteCustomerByIdQuery, [customerId])
      .then((res) => {
        if (res.rowCount == 0) {
          result({ error: "item_not_found" });
          return;
        } else {
          result(res.rows);
        }
      })
      .catch((e) => result(e));
  },
  deleteAllCustomer: (result) => {
    elephant
      .query(deleteAllCustomerQuery)
      .then((res) => result(res.rows))
      .catch((e) => result(e));
  },
};
