const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillsSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId, ref:'users'
    },
    skills:{
        type:String,
    },
    skill_experience:{
        type:String,
    }
});

module.exports = mongoose.model('Skill', SkillsSchema);