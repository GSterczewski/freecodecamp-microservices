import * as express from "express";

//export type Service<T> = (request: express.Request) => T

export interface Service<T> {
  parseRequest(request:express.Request):T
}
export type WhoamiResponse = {
  language: string;
  software:string;
  ipaddress:string;
};