const express = require("express");
const app = express();

const port = 3000;

//Add a globla middleware that be executed before all the others (Controller middlewares)
app.use(logger);

//Controller action middleware
app.get("/", function(req, res){
    console.log("Home middleware");

    //Finish the request cycle sending a response back
    res.send("Home page");
});

//Controller action middleware
app.get("/users", 
    auth, //Local middleware        
    function(req, res){
    console.log("User middleware - Admin = " + req.admin);

    //Finish the request cycle sending a response back
    res.send("Home page");
});

//Middleware function
function logger(req, res, next)
{
    console.log("log middleware - before");
    next();
    console.log("log middleware - after");
}

//Middleware function using params
function auth(req, res, next)
{
    console.log("Auth middleware - before");

    //localhost:8080/users?admin=true
    if(req.query.admin === "true"){
        //Passing parameters to next middleware
        req.admin = true;
        next();
        //to breake the function
        //return
        console.log("Auth middleware - after");
    } else {
        res.send("No Auth")
    }
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })