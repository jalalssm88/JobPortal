const express = require('express');
const router = express.Router();

const Language = require('../../models/ProfileModel/userLanguage');
router.post('/add_language', (req, res, next)=>{
    const new_language = new Language({
        user:req.headers.user_id,
        language:req.body.language,
        language_level:req.body.language_level,
    })
    new_language.save()
    .then(picture => {
        res.status(200).json({
            status:"success",
            message: 'added successfully',
        });
    })
    .catch(err => {
       res.status(500).json({
           error:err
       })
    })
});

router.get('/get_language/:id', (req, res, next)=>{
    const id = req.params.id;
    console.log('user id in get language', id)
    var query ={
        "user":id
    }
    Language.find (query) 
    .select('_id user language language_level')
    .exec()
    .then(doc => {
        doc.reverse();
        if(doc){
            res.status(200).json(doc)
        }else{
            res.status(404).json({
                message: "no data found against this id",
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;