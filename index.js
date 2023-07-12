const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`hewwo me at ${PORT}`);
});

app.get("/catinfo", (req, res) => {
  res.status(200).send({
    cat: "🐱",
    name: "Moony",
  });
});

app.post("/catinfo/:id", (req, res) => {
  const { id } = req.params;
  const { treat } = req.body;

  if (!treat) {
    res.status(418).send({ message: "We need a treat!" });
  }

  res.send({
    treat: `🐱 with your ${treat} and ID of ${id}`,
  });
});
