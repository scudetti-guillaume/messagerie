const Message = require ('../models/message')

exports.CreateMessage = (req,res,next) => {
    delete req.body._id
    const message = new Message({
        ...req.body
    })
    message.save()
    .then(() => { res.status(201).json({ message : 'post message success'})})
    .catch(error =>res.status(400).json({ error }))
}

exports.GetAllMessage = (req,res,next) => {
    Message.find() 
    
    .then(messages => res.status(200).json(messages))
    .catch(error => res.status(404).json({ error }))
}
