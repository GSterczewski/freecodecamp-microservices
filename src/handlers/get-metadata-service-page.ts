import { Handler } from "../types";
import { publicPath } from "../config";

const getMetadataService:Handler = (request,response) => {
  response
  .set("Content-Type", "text/html")
  .status(200)
  .sendFile("metadata.html",{
    root: publicPath
  });
}

export default getMetadataService;