import * as express from "express";
import { WhoamiResponse } from "../types";



export class WhoamiService {
  public parseRequest({headers,socket}:express.Request):WhoamiResponse {
    return Object.freeze({
      language : headers["accept-language"],
      software : headers["user-agent"],
      ipaddress : socket.remoteAddress
    })
  }
}