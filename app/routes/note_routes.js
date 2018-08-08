module.exports = function (app, db) {
   app.get('/notes/:id', (req, res) => {
      // get notes here
      res.send('Hello GET');
   });

   app.post('/notes', (req, res) => {
      // create note here
      res.send('Hello POST');
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