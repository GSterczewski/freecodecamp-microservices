import { Request as ExpressRequest, Response }  from "express";

export enum HTTPMethods {
  get = "get",
  post = "post"
}


export type Request = ExpressRequest;
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

/*
export interface MetadataServiceRequest extends Request{
  file: {
    originalname:string;
    mimetype:string;
    size:number;
  }
}
*/
export type MetadataServiceResponse = {
  name:string;
  type:string;
  size:number;
}

export type FileMetadataInput = {
  mimetype:string;
  originalname:string;
  size:number;
};

export interface MetadataServiceRequest  extends Express.Request{
  file: FileMetadataInput 
};

export type Handler = (request: Request, response: Response) => void;
export type HandlerCreator<T> = (service: Service<T>) => Handler;
