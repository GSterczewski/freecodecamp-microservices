
import { WhoamiResponse, HandlerCreator } from "../types";

const createWhoamiHandler: HandlerCreator<WhoamiResponse> = service => (request,response) => {
  response
      .status(200)
      .json(service.parseRequest(request))
}; 

export default createWhoamiHandler;