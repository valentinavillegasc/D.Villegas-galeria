const app = require("./src/app");
const { database } = require("./src/db");

database.sync();
app.listen(3001, () => {
  console.log("Listening on port 3001!");
});
