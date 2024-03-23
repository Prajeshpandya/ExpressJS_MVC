import { app } from "./app.js";
import { connDB } from "./data/database.js";
import userRouter from "../MVC/routes/user.js";

app.listen(process.env.PORT, () => {
  console.log("server is working!");
});

console.log(process.env.PORT)

connDB();

//made prefix route so now we not have to write again and again same path for user/...
app.use("/users", userRouter); 

app.get("/", (req, res) => {
  res.send("Nice");
});
