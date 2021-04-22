import { MetadataServiceRequest } from "../types";


const createMetadataHandler = (service: MetadataService) => (request: MetadataServiceRequest,response):void => {
  try{
    const input = service.parseRequest(request);
    response
    .status(200)
    .json(input);
  } catch(err){
    response
    .status(400)
    .send("Bad request")
  }
};
  
export default createMetadataHandler;

  