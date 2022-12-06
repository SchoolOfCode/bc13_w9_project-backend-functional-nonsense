const express = require("express");
const morgan = require("morgan");
const contactsRouter = require("./routes/contactsRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const cors = require("cors");
const compression = require('compression')

const app = express();
const PORT = process.env.PORT;

app.use(cors("*"));
app.use(compression);
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/contacts", contactsRouter);
app.use("/users", usersRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
