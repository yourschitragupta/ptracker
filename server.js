const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "CONNECTED TO THE HOST SERVER" }).send();
});

// app.get("/:any", (req, res) => {
//   res.status(404).json({ message: "URL NOT FOUND" }).send();
// });

app.use("/expenses", require("./routes/expense"));
app.use("/common", require("./routes/utils"));

app.listen(PORT, () => {
  console.log(`lisiting on port no: ${PORT}`);
});
