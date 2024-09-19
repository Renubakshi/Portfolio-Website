const path = require('path');
const hbs = require("hbs");
const ContactForm = require("./db")
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// PATH SETUP
const publicPath = path.join(__dirname,"../public") 
const viewsPath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

// TO SERVE STATIC WEBSITE
app.use(express.static(publicPath));

// TO SET VIEW ENGINE
app.set("view engine","hbs");
app.set('views',viewsPath);

// TO REGISTER PARTIALS
hbs.registerPartials(partialPath);

// TO GET THE FORM DATA
app.use(express.urlencoded({extended:false}));

// ROUTING
app.get("/",(req,res)=>{
    res.status(200).render('index');
});
app.get("/contact",(req,res)=>{
    res.status(200).render("contact");
});

app.get('/contact/*',(req,res)=>{
    res.status(404).render("404",{
        errorData : "error no page found inside contact page"
    });
});
// STORING USER DATA TO MONGODB
app.post("/contact",async(req,res)=>{
    try{
        const data = new ContactForm( {
            name : req.body.name,
            email : req.body.email,
            message : req.body.message
        })
        await ContactForm.insertMany([data]);
        // alert("message send succesfully");
        res.status(201).render("contact",{
            data : "Message send Successfully."
        });
    }
    catch(err){
        res.status(404).render("contact",{
            data : err
        })
    }
})
app.get("*",(req,res)=>{
    res.status(404).render("404",{
        errorData : "OOPS! Page not found"
    });
});
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})