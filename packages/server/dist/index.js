"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const { PORT } = process.env;
const app = new app_1.App();
console.log(app);
app.app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map