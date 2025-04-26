import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(3001, () =>
      console.log(`Servidor rodando em http://localhost:${3001}`)
    );
  })
  .catch((err) => console.error(err));
