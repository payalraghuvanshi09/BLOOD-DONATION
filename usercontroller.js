const { API } = require("./userservices");

module.exports = {
  API: (req, res) => {
    const body = req.body;
    API(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results=>", results.length);
      res.render("index", { title: "Express", table: results });

      // return res.status(200).json({
      //   success: 1,
      //   data: results,
      // });
    });
  },
};
