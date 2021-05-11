const fs=require("fs");
const http=require("http");
const express=require("express.js");
//server request karni hai and print
// me likhna hai Hello world/
fs.writeFile("./Readme.txt","This is the Readme file",()=> {});
const app=express();
const server=http.createServer(app);
server.listen(3000);