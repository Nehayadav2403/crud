

const fs = require("fs");

fs.mkdirSync("neha");

fs.writeFileSync("bio.txt","my name is neha yadav");

fs.appendFileSync("bio.txt","my age is 24 years old");

const data = fs.readFileSync("bio.txt");
console.log(data);

fs.renameSync("bio.txt","mybio.txt");

 fs.unlinkSync("mybio.txt");






