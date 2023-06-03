
let  express = require("express");

 class server {

   constructor(){
     this.app = express();
     this.port = process.env.PORT;
     this.routes();
     this.middlewares();
   }

   middlewares(){ 
    this.app.use(express.static("public"));
   }
   routes(){
     this.app.get("/hola", (req,res) =>{
     res.send("<ch1> Hola mundo </h1>");
     });
    
    }
    
    listen(){

        this.app.listen(this.port, () => {
 console.log("http://127.0.0.1:" + this.port);

});
    }
 }
 
 module.exports = server;