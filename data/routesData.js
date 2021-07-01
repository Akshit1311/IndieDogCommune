import { teamMembers } from "./teamData.js";

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
    data: { title: "contribute" },
  },
  "/adopt": {
    page: "adopt",
    data: { title: "adopt" },
  },
  "/about": {
    page: "about",
    data: { title: "about" },
  },
  "/gallery": {
    page: "gallery",
    data: { title: "gallery" },
  },
  "/team": {
    page: "team",
    data: { title: "team", members: teamMembers },
  },
  "/blogs": {
    page: "blogs",
    data: { title: "blogs" },
  },
};

export default routesData;
