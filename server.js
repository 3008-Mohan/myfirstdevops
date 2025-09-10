const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Hello from Azure DevOps Project 🚀");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page 💡 running on Azure!");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at support@myfirstdevops.com 📧");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
