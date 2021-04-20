"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv_1 = require("dotenv");
var whoami_1 = require("./handlers/whoami");
var whoami_2 = require("./services/whoami");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.handlers = [];
        dotenv_1.config();
        this.appTitle = process.env.APP_TITLE;
        this.localPort = process.env.LOCAL_PORT;
        this.productionPort = process.env.PRODUCTION_PORT;
    }
    App.prototype.initHandlers = function () {
        var _this = this;
        this.handlers.forEach(function (_a) {
            var route = _a.route, method = _a.method, handler = _a.handler;
            _this.express[method](route, handler);
        });
    };
    App.prototype.registerHandler = function (route, method, handler) {
        this.handlers.push({
            route: route,
            method: method,
            handler: handler
        });
    };
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
        this.initHandlers();
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
app.registerHandler("/whoami", "get", whoami_1["default"](new whoami_2.WhoamiService()));
app.run();
