const sqlcon = require("./config/database.js");

module.exports = {
  API: (user, result) => {
    sqlcon.query("SELECT * FROM blooddonner", [], (err, res) => {
      if (err) {
        console.log("error during insertig user to db");
        result(err, null);
      }
      console.log(res);
      result(null, res);
    });
  },
};
