
import { TimestampResponse, HandlerCreator } from "../types";

const createTimestampHandler: HandlerCreator<TimestampResponse> = service => (request,response) => {
  const inputDate = request.params.date || "";
  response
      .status(200)
      .json(service.parseRequest(inputDate))
}; 

export default createTimestampHandler;