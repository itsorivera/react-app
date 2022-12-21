const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


//request API
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


//listenin 4ever
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});