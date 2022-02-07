const fs = require("fs");
const mnemonic = fs.readFileSync("mnemonic.secret").toString().trim();
console.log(mnemonic);