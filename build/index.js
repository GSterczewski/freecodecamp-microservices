"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv_1 = require("dotenv");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        dotenv_1.config();
        this.appTitle = process.env.APP_TITLE;
        this.localPort = process.env.LOCAL_PORT;
        this.productionPort = process.env.PRODUCTION_PORT;
    }
    App.prototype.runDev = function () {
        var _this = this;
        this.express.listen(this.localPort, function () {
            console.log(_this.appTitle + " is running on port " + _this.localPort);
        });
    };
    App.prototype.runProduction = function () {
        this.express.listen(this.productionPort);
    };
    App.prototype.run = function () {
        if (process.env.NODE_ENV === "production") {
            this.runProduction();
        }
        else {
            this.runDev();
        }
    };
    return App;
}());
var app = new App();
app.run();
