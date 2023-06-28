const express=require('express');
const app=express();
 const middleware=function(req,res,next){
    console.log("The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.");
    next();
 }
 const middlewaresecond=function(req,res,next){
    console.log("Middlewaresecond used - Common middleware examples include database middleware, application server middleware, message-oriented middleware, web middleware, and transaction-processing monitors.");
    next();
 }
        app.use(middleware);
        app.get('/Homepage/',middlewaresecond,function(req,res){
            res.send("A home page is the primary web page that a visitor will view when they navigate to a website via a search engine, and it may also function as a landing page to attract visitors. ")
        })
        app.get('/login',middlewaresecond,function(req,res){
            res.send("The login page allows a user to gain access to an application by entering their username and password or by authenticating using a social media login.")
        })
        app.get('/aboutus',function(req,res){
            res.send("here is the about us - About Us pages are where you showcase your history, what is unique about your work, your company's values, and who you serve. ")
        })
        app.get('/contactus',function(req,res){
            res.send("A Contact Us page is essential for your site to engage with visitors and customers. Check out these helpful tips and contact us page ...")
        })
        
app.listen(3000)
