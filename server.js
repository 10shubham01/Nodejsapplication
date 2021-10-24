const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send({
    Project: "Node.js Rest APIs with Express & PostgresSQL",
    APIs: {
      Get_all_customers: ["Get", "http://localhost:3000/customer/"],
      Get_customer_by_id: ["Get", "http://localhost:3000/customer/id"],
      Add_Customer: ["Post", "http://localhost:3000/customer/"],
      Update_customer_by_id: ["Put", "http://localhost:3000/customer/id"],
      Delete_customer_by_id: ["Delete", "http://localhost:3000/customer/id"],
      Delete_all_customers: ["Delete", "http://localhost:3000/customer/"],
    },
    run: "nodemon server.js",
    dependencies: {
      express: "^4.17.1",
      pg: "^8.7.1",
    },
    Author: "Shubham Gupta",
    Github: "https://github.com/10shubham01",
  });
});
require("./Routes/customer.routes")(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
