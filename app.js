import express from "express";
import path from "path";
import routesData from "./data/routesData.js";

const app = express();

const __dirname = path.resolve(path.dirname(""));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

//Render Routes
Object.keys(routesData).forEach((route) => {
  const { page, data } = routesData[route];

  return app.get(route, (req, res) => {
    res.render(page, data);
  });
});

// app.get("/contact", (req, res) => {
//   res.render("contact", { title: "Contact" });
// });
// app.get("/contribute", (req, res) => {
//   res.render("contribute", { title: "Contribute" });
// });
// app.get("/adopt", (req, res) => {
//   res.render("adopt", { title: "Adopt" });
// });
// app.get("/about", (req, res) => {
//   res.render("about", { title: "About" });
// });
// app.get("/gallery", (req, res) => {
//   res.render("gallery", { title: "Gallery" });
// });
// app.get("/team", (req, res) => {
//   res.render("team", { title: "Team" });
// });
// app.get("/blogs", (req, res) => {
//   res.render("blogs", { title: "Blogs" });
// });

// app.use(function (req, res, next) {
//   res.status(404).render("notfound", { title: "Page Not Found" });
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
