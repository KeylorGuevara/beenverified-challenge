const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')

app.use(session({
    secret : 'estosolosonvaloresrandom1234567890',
    saveUnintialized: false,
    resave: false
}))

mongoose.Promise = Promise
mongoose.connect('mongodb://127.0.0.1:27017/angulardb')
.then(() => console.log('Mongoose up!'))

const User = require('./models/users')

app.use(bodyParser.json())

app.post('/api/login', async (req, res) => {
    const {userEmail, userPassword} = req.body
    console.log(userEmail, userPassword)
    const resp = await User.findOne({userEmail,userPassword})
    if(!resp){
        res.json({
            success: false,
            secret: "Incorrect password."
        })
    }else{
        //make a session using express to user log in.
        res.json({
            success: true
        })
        req.session.user = userEmail
        console.log("Logging you in!")
        req.session.save()

    }
    //res.send("Working!")

})

app.get('/api/isLoggedIn',(req, res) =>{
    res.json({
        status: !!req.session.user
    })
})


app.post('/api/register',  async (req, res) => {
    console.log(req.body)
    const {userEmail, userPassword} = req.body

    const existingUser = await User.findOne({userEmail})
    if(existingUser){
        res.json({
            success: false,
            secret: "Email already in use."
        })
        return 
    }


    const user = new User ({
        userEmail, userPassword
    })

    const result = await user.save()
    console.log(result)
    res.json({
        success: true,
        secret: "Welcome tester!"
    })

    //Store the data on DB.
//    Usermodel.save({})
})

app.get('/api/data', async (req,res) =>{
    console.log(req.session)
    const user = await User.findOne({userEmail: req.session.user})
    
    if(!user)
    {
        res.json({
            status: false,
            message: 'User not found or deleted.'
        })
        return
    }

    res.json({
        status: true,
        email: req.session.user,
        quote: user.quote
    })
})


app.get('/api/logout',(req,res) =>{
    req.session.destroy()
    res.json({
        success:true   
    })
})

app.listen(1234, ()=> console.log('Server listening at 1234'))