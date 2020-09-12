const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});
app.get("/contribute", (req, res) => {
  res.render("contribute", { title: "Contribute" });
});
app.get("/adopt", (req, res) => {
  res.render("adopt", { title: "Adopt" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/gallery", (req, res) => {
  res.render("gallery", { title: "Gallery" });
});
app.get("/team", (req, res) => {
  res.render("team", { title: "Team" });
});
app.get("/blogs", (req, res) => {
  res.render("blogs", { title: "Blogs" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
