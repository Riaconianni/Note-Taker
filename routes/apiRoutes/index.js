const router = require('express').Router();
const {notes} = require('../../data/db.json');

router.get('/api/notes', (req, res) => {
  return res.json(notes);
});

router.post('/api/notes', (req, res) => {
  console.log(req.body);

  notes.push(req.body);

  res.json(notes);
});

module.exports = router;