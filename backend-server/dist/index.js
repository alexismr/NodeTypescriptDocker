"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = process.env.PORT || 5000;
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log('Express server puerto 5000: \x1b[32m%s\x1b[0m', 'online');
});
//# sourceMappingURL=index.js.map