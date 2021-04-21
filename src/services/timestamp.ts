
import {  TimestampResponse } from "../types";

export class TimestampService {
  private isValidDate(dateString:string):boolean{
    return !isNaN(Date.parse(dateString));
  }
  private formatResponse(unix:number, date:Date):TimestampResponse {
    return Object.freeze({
      unix,
      utc:date.toUTCString()
    })
  }
  private formatErrorResponse(err:Error):TimestampResponse{
    
    return {
      error: "Invalid date"
    }
  }
  
  private timestampFromUnix(unixTime:number):TimestampResponse{
    try{
      
      const date = new Date(unixTime);
      return this.formatResponse(unixTime, date);
    } catch(err){
      return this.formatErrorResponse(err)
    }
  }
  private timestampFromDate(dateString:string): TimestampResponse {
    try{
      if(!this.isValidDate(dateString)){
        throw new Error("Invalid date format");
      }
      if(dateString.endsWith("-")){
        dateString += "01";
      }
      const unix = Date.parse(dateString);
      const date = new Date(unix);
      return this.formatResponse(unix,date);
    } catch(err){
      return this.formatErrorResponse(err)
    }
  }

  private fromCurrentTime():TimestampResponse {
    const now = new Date();
    const unix = now.getTime();
    return this.formatResponse(unix,now);
  }
  public parseRequest(input:string):TimestampResponse {
      
    if(!input || input.length === 0){
      return this.fromCurrentTime();
    }
    if(isNaN(Number(input))) {
      return this.timestampFromDate(input);
    }
    return this.timestampFromUnix(Number(input))
  }
}