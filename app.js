const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

const routesData = {
  "/": {
    page: "home",
    data: { title: "Home" },
  },
  "/contact": {
    page: "contact",
    data: { title: "Contact" },
  },
  "/contribute": {
    page: "contribute",
    data: { title: "Contribute" },
  },
  "/adopt": {
    page: "adopt",
    data: { title: "Adopt" },
  },
  "/about": {
    page: "about",
    data: { title: "About" },
  },
  "/gallery": {
    page: "gallery",
    data: { title: "Gallery" },
  },
  "/team": {
    page: "team",
    data: { title: "Team" },
  },
};

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
