const express = require('express');
const router = express.Router();

const Education = require('../../models/ProfileModel/userEducation');
router.post('/add_education', (req, res, next)=>{
    console.log('education', req.body)
    // const new_education = new Education({
    //     user_id:req.headers.user_id,
    //     institude:req.body.institude,
    //     degree_title:req.body.degree_title,
    //     field:req.body.field,
    //     end_date:req.body.end_date,
    // })
    // new_education.save()
    // .then(picture => {
    //     res.status(200).json({
    //         status:"success",
    //         message: 'added successfully',
    //     });
    // })
    // .catch(err => {
    //    res.status(500).json({
    //        error:err
    //    })
    // })
});

router.get('/get_education/:id', (req, res, next)=>{
    const id = req.params.id;
    console.log('user id in work place', id)
    var query ={
        "user_id":id
    }
    Education.find (query) 
    .select('_id user_id institude degree_title field end_date')
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