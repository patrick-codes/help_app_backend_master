const mongoose = require("mongoose");

module.exports = {
  dbConn: async (req, res, next) => {
    try {
      const connect = await mongoose.connect('mongodb+srv://kofiktechgh:15sfOT87EPMowCt5@cluster0.eibpinx.mongodb.net/');
      console.log(
        "Database Connected Succesfully to: ",
        connect.connection.host,
        connect.connection.name
      );
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  },
};
