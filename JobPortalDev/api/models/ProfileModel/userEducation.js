const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId, ref:'users'
    },
    institude:{
        type:String,
    },
    degree_title:{
        type:String,
    },
    field:{
        type:String,
    },
    end_date:{
        type:String
    }
});

module.exports = mongoose.model('Education', EducationSchema);