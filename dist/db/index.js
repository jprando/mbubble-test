"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
const mongobubble_1 = require("mongobubble");
const config_1 = require("./config");
exports.mongo = new mongobubble_1.MongoBubble({
    uri: config_1.mongoConfig.uri,
    db: config_1.mongoConfig.banco,
});
