const { app } = require("./app");

// Utils
const { initModels } = require("./models/initModels");
const { db } = require("./utils/database.util");

const startServer = async () => {
  try {
    await db.authenticate();

    // Establish the relations between models
    initModels();

    //
    await db.sync();

    // Set server to listen
    const PORT = 9000;

    app.listen(PORT, () => {
      console.log(" 🟢 Running app tasks 🚀");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
