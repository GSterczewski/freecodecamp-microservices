import { WhoamiResponse, Request } from "../types";

class WhoamiService{
  public parseRequest(request: Request):WhoamiResponse{
    return Object.freeze({
      ipaddress: request.socket.remoteAddress,
      software: request.headers["user-agent"],
      language: request.headers["accept-language"]
    })
  }
}

export default WhoamiService;