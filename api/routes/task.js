const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../model/task');
const authenticate = require("../middleware/authenticate");


/* router.get('/', (req,res,next)=>{
    res.status(200).json({
        msg: 'This is UserData get request'
    })
})*/

// ! For Get Request | retrive Data From DataBase //
router.get('/all-tasks', authenticate, async (req, res, next) => {

    Task.find()
        .then(result => {
            res.status(200).json({
                taskData: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})


// ! For Post Request 👇👇 added Data from DataBase //
router.post('/add-task', authenticate, (req, res, next) => {

    const taskdata = new Task({
        _id: new mongoose.Types.ObjectId,
        taskName: req.body.taskName,
        description: req.body.description,
        status: req.body.status,
        date: req.body.date
    })

    taskdata.save()
        .then(result => {
            /* console.log(result); */
            res.status(200).json({
                newTask: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

// ! For Get Request | retrive One Data From DataBase //
router.get('/get-task/:id', authenticate, (req, res, next) => {
    /* console.log(req.params.id); */
    Task.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                taskData: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})


// ! For Delete Request | Delete Data From DataBase //
router.delete('/delete-task/:id', authenticate, (req, res, next) => {
    /* console.log(req.params.id); */
    Task.findByIdAndRemove({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                message: 'Data Deleted',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Data Not Deleted',
                error: err
            })
        })
})


// ! PUT Request For Update All Data | Update Data From DataBase //
router.put('/update-task/:id', authenticate, (req, res, next) => {
    /* console.log(req.params.id); */
    Task.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            taskName: req.body.taskName,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date
        }
    })
        .then(result => {
            res.status(200).json({
                updated_record: result
            })
        })
        .catch(err => {
            console.log(error)
            res.status(500).json({
                error: err
            })
        })
})


// ! Pagination API //
router.get('/tasks', authenticate, async (req, res, next) => {

    const pageNumber = parseInt(req.query.pageNumber, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    const tasks = await Task.find().skip((pageNumber - 1) * limit).limit(limit);

    res.json({
        tasks,
    });
})


// ! Searching API //

router.get("/search/:key", authenticate, async (req,resp)=>{

    const data = await Task.find(
        {
            "$or":[
                {taskName:{$regex:req.params.key}},
                {description:{$regex:req.params.key}},
                {status:{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);

})

module.exports = router;