const express = require("express");
const app = express();
app.use(express.json());

// app.get("/todos", (req, res) => {
//   getAlldata((data) => {
//     res.send(data);
//   });
// });

require("./customer.routes.js")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
/*----------------------------------------------------------------- Geting data from data base---------------------------------------------- */

// app.post("/todos", (req, res) => {
//   createUser((data) => {
//     res.send(data);
//   });
// });
