const mongoose=require('mongoose');
var empSchema=new mongoose.Schema({
        fullName:{
            type:String
        },email:{
            type:String
        },
        mobile:{
            type:String
        },
        city:{
            type:String
        }

});
//first parameter can take any name
mongoose.model('Employee',empSchema);
