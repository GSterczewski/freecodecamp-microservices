import * as express from "express";


export interface Service<T> {
  parseRequest(request:express.Request):T
}
export type WhoamiResponse = {
  language: string;
  software:string;
  ipaddress:string;
};

export type TimestampResponse = {
  unix?:number;
  utc?:string;
  error?:string;
  
}
