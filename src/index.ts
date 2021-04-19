import * as express from "express";
import { config }  from "dotenv";




class App {
  private localPort:string;
  private productionPort:string;
  private appTitle:string;
  private express = express();
  constructor(){
    config();
    this.appTitle = process.env.APP_TITLE;
    this.localPort = process.env.LOCAL_PORT;
    this.productionPort = process.env.PRODUCTION_PORT;
  }
  private runDev():void{
    this.express.listen(this.localPort, ()=>{
      console.log(`${this.appTitle} is running on port ${this.localPort}`)
    });
  }
  private runProduction():void {
    this.express.listen(this.productionPort);
  }
  public run(){
    if(process.env.NODE_ENV === "production"){
      this.runProduction()
    }
    else {
      this.runDev()
    }
  }
}

const app = new App();
app.run();