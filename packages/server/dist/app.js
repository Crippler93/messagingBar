"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Express = require("express");
const users_1 = require("./Routes/users");
class App {
    constructor() {
        this.user = new users_1.Route();
        this.app = Express();
        this.app.use(Express.json());
        this.app.use('/users', this.user.routes);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map