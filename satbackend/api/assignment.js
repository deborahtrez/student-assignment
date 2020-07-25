const express = require('express')
const router = express.Router()
const assignmentData = require('../models/assignmentModel')

//get all assignments from database
router.get('/', (request, response) => {
    assignmentData.find()
    .then (assignments => {response.json(assignments)})
    .catch (error => {response.json(error)})
})

//create new assignment
router.post ('/create', (request, response) => {
    const createAssignment = new assignmentData({
        username:request.body.username,
        assignmentReport:request.body.assignmentReport,
        timeSubmitted:request.body.timeSubmitted
    })
//.....and save it to the database
    createAssignment.save()
    .then (assignments => {response.json(assignments)})
    .catch (error => {response.json(error)})
})

//get one assignment from the database by the id which is in the id section of the url params
router.get('/:id', (request, response) =>{
    assignmentData.findById(request.params.id)
    .then(assignment => { response.json(assignment)})
    .catch(error =>{ response.json(error) })
})

//delete an assignment from the database by the ID passed in the params of the URL
router.delete('/:id', (request, response) => {
    assignmentData.findByIdAndDelete(request.params.id)
    .then( () => { response.json('Assignment deleted')})
    .catch(error =>{ response.json(error) })
})

router.post('/update/:id', (request, response) =>{
    assignmentData.findById(request.params.id)
        .then(assignment =>{
            assignment.username = request.body.username
            assignment.assignmentReport = request.body.assignmentReport
            assignment.timeSubmitted = request.body.timeSubmitted
            assignment.save()
            .then(() =>{ response.json('Exercise Updated') })
         })
            .catch(error =>{ response.json(error) })
})

module.exports = router