const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostJobSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId, ref:'users'
    },
    company:{
        type:String,
    },
    job_title:{
        type:String,
    },
    description:{
        type:String,
    },
    city:{
        type:String,
    }
});

module.exports = mongoose.model('Postjob', PostJobSchema);