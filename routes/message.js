const express = require("express");
const router = express.Router();
const ctrlMessages = require('../controllers/message')

router.post('/', ctrlMessages.CreateMessage);
router.get('/', ctrlMessages.GetAllMessage);


module.exports = router;