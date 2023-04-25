const fs = require("fs");
const crypto = require("crypto");
const date = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;
setTimeout(() => {
  console.log("settimeOut");
}, 0);
setImmediate(() => {
  console.log("setImmediate");
});

fs.readFile("./test-file.txt", () => {
  console.log("I/O input");

  setTimeout(() => {
    console.log("settimeOut 2");
  }, 2000);
  setTimeout(() => {
    console.log("settimeOut 3");
  }, 3000);
  setImmediate(() => {
    console.log("setImmediate 2");
  });
  process.nextTick(() => {
    console.log("process.nextTick");
  });
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - date, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - date, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - date, "Password encrypted");
  });
});

console.log("log");
