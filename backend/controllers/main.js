// main controller

modules.export.home = function (req, res) {
  res.render("index", { title: "Express" });
};
