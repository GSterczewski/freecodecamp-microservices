import { Request, Response }  from "express";

export enum HTTPMethods {
  get = "get",
  post = "post"
}


export interface Service<T> {
  parseRequest(...args:any[]):T
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
  
};

export type Handler = (request: Request, response: Response) => void;
export type HandlerCreator<T> = (service: Service<T>) => Handler;
