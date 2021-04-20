import * as express from "express";
import { config }  from "dotenv";
import createWhoamiHandler from "./handlers/whoami";
import { WhoamiService } from "./services/whoami";

type HTTPHandler = (request: express.Request, response: express.Response) => void


class App {
  private localPort:string;
  private productionPort:string;
  private appTitle:string;
  private express = express();
  private handlers: Array<{
    method: string;
    route:string;
    handler: HTTPHandler;
  }> = []
  constructor(){
    config();
    this.appTitle = process.env.APP_TITLE;
    this.localPort = process.env.LOCAL_PORT;
    this.productionPort = process.env.PRODUCTION_PORT;
  }
  private initHandlers():void{
    this.handlers.forEach(({route,method,handler}) => {
      this.express[method](route,handler)
    })
  }
  public registerHandler(route:string, method:string, handler:HTTPHandler):void{
    this.handlers.push({
      route,
      method,
      handler
    })
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
    this.initHandlers()
    if(process.env.NODE_ENV === "production"){
      this.runProduction()
    }
    else {
      this.runDev()
    }
  }
}

const app = new App();
app.registerHandler("/whoami","get", createWhoamiHandler(new WhoamiService()))
app.run();