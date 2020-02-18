const router = require('express').Router();
const {notes} = require('../../data/db.json')

router.get('/api/notes', (req, res) => {
  return res.json(notes);
});

module.exports = router;