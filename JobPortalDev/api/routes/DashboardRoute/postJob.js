const express = require('express');
const router = express.Router();

const PostJob = require('../../models/DashboardModel/postJob');
router.post('/post_job', (req, res, next)=>{
    console.log('education', req.body)
    const new_job = new PostJob({
        user:req.headers.user_id,
        company:req.body.company,
        job_title:req.body.job_title,
        description:req.body.description,
        city:req.body.city
    })
    new_job.save()
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

router.get('/get_posted_job/:id', (req, res, next)=>{
    const id = req.params.id;
    console.log('user id in work place', id)
    var query ={
        "user":id
    }
    PostJob.find (query) 
    .select('_id user company job_title description city')
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

router.get('/get_all_posted_job', (req, res, next)=>{
    PostJob.find() 
    .select('_id user company job_title description city')
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