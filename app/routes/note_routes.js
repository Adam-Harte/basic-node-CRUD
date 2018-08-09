module.exports = function (app, db) {
   app.get('/notes/:id', (req, res) => {
      // get notes here
      res.send('Hello GET');
   });

   const collection = app.post('/notes', (req, res) => {
      // create note here
      const note = { text: req.body.body, title: req.body.title };
      db.collection('notes').insert(note, (err, result) => {
         if (err) {
            res.send({ 'error': 'An error has occurred' });
         } else {
            res.send(result.ops[0]);
         }
      });
   });

   app.put('/notes/:id', (req, res) => {
      // update note here
      res.send('Hello PUT');
   });

   app.delete('/notes/:id', (req, res) => {
      // delete note here
      res.send('Hello DELETE');
   });
};