const express=require("express");
const app=express();
const mongoose=require("mongoose");
const users = require("./model/users");
const User= require("./model/users")
mongoose.connect('mongodb+srv://dbPravat:cTps0wK5BhVJc9SP@cluster0.xdhtt.mongodb.net/demodb?retryWrites=true&w=majority',
   {
    useNewUrlParser: true,
    useUnifiedTopology: true

   }
);

const data = new user({
   _id: "Nishan",
   email: "nishan@test.com",
   address: "india"

});
data.save().then((result)=>{
   console.warn(result)
})
.catch(err=>console.warn(err))