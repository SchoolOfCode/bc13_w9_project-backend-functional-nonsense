const express = require("express");
const morgan = require("morgan");
const contactsRouter = require("./routes/contactsRouter.js");
const usersRouter = require("./routes/usersRouter.js");

const app = express();
const PORT = process.env.PORT;


app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});