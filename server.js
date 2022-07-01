var app = require('./app')
var http = require('http').Server(app);
var io = require('socket.io')(http);
const Message = require ('./models/message')
let port = 3000;


io.on("connection", function(socket){
  socket.on('chat message', function(msg){
    io.emit('request message', msg)
      const message = new Message({ message : msg })
      message.save()
      socket.broadcast.emit('play song')
    })
  })


exports.GetAllMessage = (req,res,next) => {
    Message.find()
    .then(messages => res.status(200).json(messages))
    .catch(error => res.status(404).json({ error }))
}


http.listen(port ,function(){
  console.log('listening on port : ' + port );
})