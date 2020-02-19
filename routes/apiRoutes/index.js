const router = require('express').Router();
const {notes} = require('../../data/db.json')

// function findById(id, notesArray) {
//   const result = notesArray.filter(notes => notes.id === id)[0];
//   return result;
// }

router.get('/api/notes', (req, res) => {
  return res.json(notes);
});

// router.get('/api/notes/:id', (req, res) => {
//   const result = findById(req.params.id, notes);
//   console.log(result);
//   if (result) {
//     res.json(result);
//   } else{
//     res.send(404);
//   }
// });

router.post('/api/notes', (req, res) => {
  console.log(req.body);

  notes.push(req.body);

  res.json(notes);
});

module.exports = router;