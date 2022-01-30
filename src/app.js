const express = require('express');
const app = express();
const hbs = require('hbs')
const path = require('path');

//BELOW few LINES OF CODE ,HELP US TO SERVE HTML/CSS/JS/FRONTEND WEBSITE/PUBLIC FOLDER here WITH HELP OF a template engine "handlebars or hbs"
//AND THIS WHOLE INDEX.JS IS OUR SERVER(basically we do not need xaamp for this purpose)
const static_path = path.join( __dirname,"../public");
const template_path = path.join( __dirname,"../templates/views");
const partials_path = path.join( __dirname,"../templates/partials");

app.set('view engine','hbs');  // this fucking one line of code is all about serving our website through template engine
app.set('views', template_path); 
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing
app.get("/",(req,res)=> {
    res.render('index');   //phle hm `res.send` use krte the bt ab (coz of hbs),we gonna use `res.render` ,bss folder ka naam views hona cahhiyy ,ye automatically view folder k ander index.hbs ko re
});
app.get("/about",(req,res)=> {
    res.render('about');
});
app.get("/weather",(req,res)=> {
    res.render('weather');
});
app.get("*",(req,res)=> {
    res.render('404error');
});


app.listen(8000,()=>{
    console.log("listning at port 8000");
});