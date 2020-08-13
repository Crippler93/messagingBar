"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const Express = require("express");
const Users_1 = require("../Controllers/Users");
class Route {
    constructor() {
        this.routes = Express.Router();
        this.routes.get('/', Users_1.getAll);
        this.routes.get('/:id', Users_1.getId);
    }
}
exports.Route = Route;
//# sourceMappingURL=users.js.map