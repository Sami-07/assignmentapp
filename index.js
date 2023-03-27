

// const app = express();

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'));
// //Middleware for converting our req of contacts through form into key, value pairs
// app.use(express.urlencoded())
// app.use(express.static('assets'));

// app.get('/home', function(req, res){
    
//     return res.render('home', {
//         title: 'Homepage'
//     })
// })


// app.listen(port, function(err){
//     if(err) {
//         console.log('Error in running the server', err);
//     }

//     console.log("Yup! My Express server is running on Port: ", port);
// });


const express = require('express');
const path = require('path')
const db = require('./config/mongoose')
const Assignment = require('./models/assignment')

// const mongoose = require('mongoose');
// const { title } = require('process');

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded())
app.use(express.static('assets'));

app.get('/home', function(req, res) {
    return res.render('home',{ title:'HomePage'})
})

assignments = [
    {
        title:'HW1',
        desc:'This is desc 1',
        sub: 'maths',
        dos: '29/03/22',
    },
    {
        title:'HW2',
        desc:'This is desc 1',
        sub: 'maths',
        dos: '29/03/22',
    },
    {
        title:'HW3',
        desc:'This is desc 1',
        sub: 'maths',
        dos: '29/03/22',
    },
    {
        title:'HW4',
        desc:'This is desc 1',
        sub: 'maths',
        dos: '29/03/22',
    },
    {
        title:'HW5',
        desc:'This is desc 1',
        sub: 'maths',
        dos: '29/03/22',
    }
]

// Rendering our homepage
app.get('/', async function(req, res){
    // return res.render('homePage', {
    //     assignmentList: assignments
    // });
    let assignment_data = await Assignment.find({});

    return res.render('homePage', {
                assignmentList: assignment_data
            });
})

// Adding the data to the DB upon form submission
app.post('/create-assignment', async function(req,res){
    // contactList.push(req.body)
    let newAssign  = await Assignment.create({
        title: req.body.title,
        desc: req.body.desc,
        // sub: req.body.sub,
        subject: req.body.subject,
        dos: req.body.dos
    })
    if(newAssign){
        console.log(newAssign);

        return res.redirect('back');

    }
    return res.redirect('back');
});

// Upon compeletion of assignment, removing it
app.get('/complete-assign', async function(req, res){
    //get the id from query in ul
    let id = req.query.id;

    // find the assignment in the DB using id & delete
    await Assignment.findByIdAndDelete(id);
    return res.redirect('back');
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})