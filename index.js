import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/user.js";
import sukuRoute from "./routes/suku.js";
import laguRoute from "./routes/lagu.js";




const app = express();
const port = 4000;



app.use("/user", userRoute);
app.use("/suku", sukuRoute);
app.use("/lagu", laguRoute);



app.get('/', (req, res) => {
  res.send('Hello, API!');
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
