const mongoose = require("mongoose");
const validator = require("validator");

// CONNECTION AND CREATION OF DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/PortfolioDB")
.then(()=>console.log("Connection Succesful"))
.catch(err=> console.log(`Connection Failed....${err}`))

// SCHEMA STRUCTURING
const contactSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true,
        trim : true
    },
    email : {
        type: String,
        required : true,
        lowercase : true,
        trim : true,
        validate(value){
            if(! validator.isEmail(value)){
                throw new Error("Please enter a valid email address");
            }
        }
    },
    message : {
        type : String,
        required:true,
        minlength: [3, "Please enter some message."]
    }
});

// COLLECTION CREATION
const ContactForm = new mongoose.model("ContactForm",contactSchema);
module.exports = ContactForm;

