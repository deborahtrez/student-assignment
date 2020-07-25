const express = require ('express')
const app = express ()
const cors = require ('cors')
const dotenv = require ('dotenv')
const mongoose = require ('mongoose')
const studentUrls = require ('./api/student')
const assignmentUrls = require ('./api/assignment')

dotenv.config()

mongoose.connect (process.env.DATABASE_CONNECT, { useUnifiedTopology:true }, () => console.log ("Database is connected"))

app.use(express.json())
app.use(cors())
app.use('/student', studentUrls)
app.use('/assignment', assignmentUrls)

app.listen (5000, () => {console.log("Server is running")} )

