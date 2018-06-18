"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const hotels_route_1 = require("./rutes/hotels.route");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.loadRoutes();
    }
    loadRoutes() {
        this.app.use('/hotel', hotels_route_1.default);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=App.js.map