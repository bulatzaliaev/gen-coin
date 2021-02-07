"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoBlock_1 = require("./CryptoBlock");
var CryptoBlockchain_1 = require("./CryptoBlockchain");
var myCoin = new CryptoBlockchain_1.default();
console.log("myCoin mining in progress....");
myCoin.addNewBlock(new CryptoBlock_1.default(1, "01/06/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50
}));
myCoin.addNewBlock(new CryptoBlock_1.default(2, "01/07/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100
}));
console.log(JSON.stringify(myCoin, null, 4));
