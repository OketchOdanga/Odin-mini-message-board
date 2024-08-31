const express = require('express')
const router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

//index route
router.get('/', (req, res) => 
  res.render("index", { messages: messages})
);

// new message form route
router.get('/new', (req ,res) => 
  res.render("form")
);

// handle new message
router.post('/new', (res, req) => {
  console.log(req.body);
  const { messageText, messageUser } = req.body;
  messages.push({text: messageText, user: messageUser, added: new Date() });
  console.log(messages);
  console.log(messages.length);
  res.redirect('/');
});

//
router.get('/message/:id', (req, res) => {
  const message = messages[req.params.id];
  res.render('message', {title: "Message Details", message: message});
});

module.exports = router;