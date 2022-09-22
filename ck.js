const fs = require ("fs");
const os= require("os");
const path= require("path")

fs.mkdir("folder",function(err,path){

  if (err) throw err;
  
  fs.writeFile("./folder/date-time.txt","2022-9-22 4:33","utf-8",function(err){

    if (err) throw err;
  
    console.log("file created")
  
  }
  
  );
  
});


fs.readdir("./folder", function(err,files){

  if (err) throw err;

  console.log(files)

} )

   

