const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3306;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root',
  password: 'anghel',
  database: 'movie_db'
});

// Middleware to parse JSON request bodies
app.use(express.json());

// API Endpoints

// GET /movies - Returns a list of all movies
app.get('/movies', (req, res) => {
  pool.query('SELECT * FROM movies', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching movies' });
    } else {
      res.send(results);
    }
  });
});

// GET /movies/:id - Returns a single movie by its id
app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  pool.query('SELECT * FROM movies WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching movie' });
    } else if (results.length === 0) {
      res.status(404).send({ message: 'Movie not found' });
    } else {
      res.send(results[0]);
    }
  });
});

// POST /movies - Creates a new movie
app.post('/movies', (req, res) => {
  const { title, director, year, genre } = req.body;
  if (!title || !director || !year || !genre) {
    res.status(400).send({ message: 'Required fields are missing' });
  } else {
    pool.query('INSERT INTO movies SET ?', req.body, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error creating movie' });
      } else {
        res.send({ message: 'Movie created successfully' });
      }
    });
  }
});

// PATCH /movies/:id - Updates an existing movie
app.patch('/movies/:id', (req, res) => {
  const id = req.params.id;
  pool.query('SELECT * FROM movies WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching movie' });
    } else if (results.length === 0) {
      res.status(404).send({ message: 'Movie not found' });
    } else {
      const movie = results[0];
      Object.assign(movie, req.body);
      pool.query('UPDATE movies SET ? WHERE id = ?', [movie, id], (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: 'Error updating movie' });
        } else {
          res.send({ message: 'Movie updated successfully' });
        }
      });
    }
  });
});

// DELETE /movies/:id - Deletes a movie
app.delete('/movies/:id', (req, res) => {
  const id = req.params.id;
  pool.query('SELECT * FROM movies WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching movie' });
    } else if (results.length === 0) {
      res.status(404).send({ message: 'Movie not found' });
    } else {
      pool.query('DELETE FROM movies WHERE id = ?', id, (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: 'Error deleting movie' });
        } else {
          res.send({ message: 'Movie deleted successfully' });
        }
      });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log (`Server started on port ${port}`);
});