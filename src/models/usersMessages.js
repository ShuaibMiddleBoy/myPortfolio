const mongoose = require("mongoose");
const validator = require("validator");


// create a users messages structure (Schema)
const usersMessagesSchema = mongoose.Schema({
    userName : {
        type : "String",
        required : true,
        minLegnth : 3
    },
    userEmail : {
        type : "String",
        required : true,
        minLegnth : 10,
        validate(email){
            if(!validator.isEmail(email)){
                throw new Error("Invalid Email")
            }
        }
    },
    userSubject : {
        type : "String",
    },
    userMessage : {
        type : "String",
        required : true,
        minLegnth : 10
    }
})


// create a collection (Model)
const userMessagesModel = mongoose.model("Users Messages", usersMessagesSchema);

module.exports = userMessagesModel;
