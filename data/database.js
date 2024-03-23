import mongoose from "mongoose";
export const connDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "BackendAPI" })
    .then(() => console.log("dataBaseConnected!"))
    .catch((e) => {
      console.log(e);
    });
};
