const express = require('express');
const router = express.Router();

const Skills = require('../../models/ProfileModel/userSkills');
router.post('/add_skills', (req, res, next)=>{
    const new_skills = new Skills({
        user:req.headers.user_id,
        skills:req.body.skill,
        skill_experience:req.body.skill_experience,
    })
    new_skills.save()
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

router.get('/get_skills/:id', (req, res, next)=>{
    const id = req.params.id;
    console.log('user id in get skills', id)
    var query ={
        "user":id
    }
    Skills.find (query) 
    .select('_id user skills skill_experience')
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