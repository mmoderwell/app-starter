const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});