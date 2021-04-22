import * as express from "express";
import handlers from "./handlers/index";
import { config }  from "dotenv";
import * as multer from "multer";

config();

const app = express();
const upload = multer();
app.get("/metadata", handlers.metadataService);
app.get("/api/whoami", handlers.whoami);
app.get("/api/timestamp/:date?", handlers.timestamp);
app.post("/api/metadata", upload.single("file"), handlers.api.metadata);


app.listen(process.env.PORT, ()=>{
  console.log(`${process.env.APP_TITLE} running on port : ${process.env.PORT}`)
});
