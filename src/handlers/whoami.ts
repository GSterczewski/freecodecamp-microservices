import * as express from "express";
import { WhoamiResponse, Service } from "../types";

export default (service: Service<WhoamiResponse>) => 
  (request: express.Request, response:express.Response):void => {
      response
      .status(200)
      .json(service.parseRequest(request))
  };
