const express = require("express");
const app = express();
const mongoose = require('mongoose');
const io = require("socket.io")
const messagesRoutes = require('./routes/message')
const usersRoutes = require("./routes/user")


mongoose.connect('mongodb+srv://Admin:Admin1234@cluster0.ep4znvs.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});


app.use('/api/auth', usersRoutes)
app.use('/api/messages', messagesRoutes)

app.get("/", function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName +'front/login.html')
})
app.get('/', function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName + '/front/login.html')
})
app.get('/register', function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName + '/front/register.html')
})
app.get('/login', function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName + '/front/login.html')
})
app.get('/talk', function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName + '/front/talk.html')
})
app.get('/css/style.css', function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName + '/front/css/style.css')
})
app.get('/js/login.js', function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName + '/front/js/login.js')
})
app.get('/js/register.js', function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName + '/front/js/register.js')
})
app.get('/js/talk.js', function(req,res){
  let newDirName = __dirname.slice(NaN,51)
  res.sendFile(newDirName + '/front/js/talk.js')
})


module.exports = app;