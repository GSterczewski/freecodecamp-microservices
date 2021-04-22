import { MetadataServiceResponse, MetadataServiceRequest } from "../types";

class MetadataService {
  public parseRequest(request:MetadataServiceRequest):MetadataServiceResponse{
    if(!request.file){
      throw new Error("File not provided");
    }
    const mimetype = request.file.mimetype || "unknown";
    const originalname = request.file.originalname || "unknown";
    const size = request.file.size || 0;
    return {
      type: mimetype,
      name: originalname,
      size
    } 
  }
};

export default MetadataService;