const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Online");
  } catch (error) {
    console.log(`ERROR AQUI: ${error}`);
    throw new Error("Error al inicializar BD:", error);
  }
};

module.exports = {
  dbConnection,
};
