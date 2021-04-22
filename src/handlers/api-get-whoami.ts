
import { WhoamiResponse, Service, Handler } from "../types";

const createWhoamiHandler = (service: Service<WhoamiResponse>): Handler => (request,response) => {
  response
      .status(200)
      .json(service.parseRequest(request))
}; 

export default createWhoamiHandler;