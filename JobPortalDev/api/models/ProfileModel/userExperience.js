const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId, ref:'users'
    },
    job_title:{
        type:String,
    },
    company:{
        type:String,
    },
    is_working:{
        type:String,
    },
    start_date:{
        type:String,
    },
    end_date:{
        type:String
    }
});

module.exports = mongoose.model('Experience', ExperienceSchema);