const express = require('express');
const router = express.Router();

const Experience = require('../../models/ProfileModel/userExperience');
router.post('/add_experience', (req, res, next)=>{
    const new_experience = new Experience({
        user_id:req.headers.user_id,
        job_title:req.body.job_title,
        company:req.body.company,
        is_working:req.body.is_working,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
    })
    new_experience.save()
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

router.get('/get_experience/:id', (req, res, next)=>{
    const id = req.params.id;
    console.log('user id in work place', id)
    var query ={
        "user_id":id
    }
    Experience.find (query) 
    .select('_id user_id job_title company is_working start_date end_date')
    .exec()
    .then(doc => {
        console.log('work place ====', doc)
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