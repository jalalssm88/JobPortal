const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const User = require('../models/user');

router.post('/signup', (req,res,next)=> {

    console.log('=====', req.body)
    User.find({email:req.body.email})
    .exec()
    .then(user=> {
        console.log('after exec=====', user)
        if(user.length >= 1){
            return res.status(409).json({
                status: "failed",
                message: "User already exist"
            })
        }else{
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                console.log('error ==================== ', err)
                console.log('hash=======================', hash)
                if(err){
                    return res.status(500).json({
                        error:err
                    })
                }else{
                    const new_user = new User({
                        name:req.body.name,
                        email:req.body.email,
                        password:hash,
                        role:req.body.role
                    })
                    console.log('here in new userrr ', new_user)
                    new_user.save()
                    .then(result=> {
                        res.status(200).json({
                            status: "success",
                            message: "User successfully created"
                        })
                    })
                    .catch(err=> {
                        res.status(500).json({
                            error:err
                        })
                    })
                }
            })
        }
    })
})

router.post('/login', (req, res, next)=>{
    console.log('user', req.body)
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        console.log('herere', user)
        if(user.length < 1){
            return res.status(401).json({
                message:"eamil to try to login not found"
            })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
            if(err){
                return res.status(401).json({
                    message:"Auth failed"
                })
            }
            if(result){
                const token = jwt.sign({
                    userId: user[0]._id,
                    name:user[0].name,
                    email:user[0].email,
                    role:user[0].role,
                },
                    'secret'
                );
                return res.status(200).json({
                    message: "Auth successful",
                    token:'Bearer ' + token,
                    userId: user[0]._id,
                    name:user[0].name,
                    email:user[0].email,
                    role:user[0].role
                })
            }
            res.status(401).json({
                message:"Password does not match"
            })
        })
    })
    .catch(err =>{
        console.log('error here')
        res.status(500).json({
            error:err
        })
    })
})

// router.get('/users', (req, res, next)=>{
   
//     User.find() 
//     .select('_id first_name last_name ')
//     .populate('profile_pictures')
//     .exec()
//     .then(doc => {
//         console.log('getting users form user and profile picturesssssss ====', doc)
//         doc.reverse();
//         if(doc){
//             res.status(200).json(doc)
//         }else{
//             res.status(404).json({
//                 message: "no data found against this id",
//             })
//         }
//     })
//     .catch(err => {
//         res.status(500).json({
//             error: err
//         })
//     })
// });

module.exports = router;