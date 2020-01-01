const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId, ref:'users'
    },
    language:{
        type:String,
    },
    language_level:{
        type:String,
    }
});

module.exports = mongoose.model('Language', LanguageSchema);