const {Router} = require('express');

const router = Router();

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

router.get("/new", {form: form});
router.post('/new', (res, req) => {
    
});