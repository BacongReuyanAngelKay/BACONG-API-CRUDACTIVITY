# Bacong - Movie CRUD API

## Overview

This project is an Express API that manages a movie database. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of movies. Each movie has the following properties:

*id (auto-generated, number)
*title (string, required)
*director (string, required)
*year (number, required)
*genre (string, required)
The API is connected to a MySQL database for data persistence.

## API Endpoints

### 1. Get all movies
Route: GET /movies
Description: Returns a list of all movies in the collection.
Response:
[
{
"id": 1,
"title": "The Shawshank Redemption",  
 "director": "Frank Darabont",  
 "year": 1994,  
 "genre": "Drama"
},
...
]

### 2. Get a movie by ID
- *Route*: GET /movies/:id
- *Description*: Returns a single movie by its ID.
- *Response*:
  
{
"id": 1,
"title": "The Shawshank Redemption",  
 "director": "Frank Darabont",  
 "year": 1994,  
 "genre": "Drama"
}

### 3. Create a new movie
- *Route*: POST /movies
- *Description*: Creates a new movie in the collection.
- *Request Body*:
  
{
"title": "Pulp Fiction",  
"director": "Quentin Tarantino",  
"year": 1994,  
"genre": "Crime"
}
- *Response*:
  
{
"message": "Movie added successfully",
"movie": {
"id": 2,
"title": "The Matrix",  
"director": "Lana Wachowski, Lilly Wachowski",  
"year": 1999,  
"genre": "Action"
}
}

### 4. Update a movie by ID
- *Route*: PUT /movies/:id
- *Description*: Updates an existing movie by its ID.
- *Request Body*:
  
{
"title": "Fight Club",  
"director": "David Fincher",  
"year": 1999,  
"genre": "Drama"
}
- *Response*:
  
{
"message": "Movie updated successfully"
}

### 5. Delete a movie by ID
- *Route*: DELETE /movies/:id
- *Description*: Deletes a movie by its ID.
- *Response*:
  
{
"message": "Movie deleted successfully"
}

## Installation

1. Clone the repository:
   
git clone <repository-link>
cd BACONG-API-CRUDACTIVITY

2. Initialize npm and install dependencies:
   
npm init -y
npm install express mysql2 body-parser

3. Create the MySQL database and populate it with sample data:
   
CREATE DATABASE movie_db;
USE movie_db;

CREATE TABLE movies (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
director VARCHAR(255) NOT NULL,
year INT NOT NULL,
genre VARCHAR(100) NOT NULL
);

INSERT INTO movies (title, director, year, genre)
VALUES ('The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama');

INSERT INTO movies (title, director, year, genre)
VALUES ('Fight Club', 'David Fincher', '1999', 'Drama');

INSERT INTO movies (title, director, year, genre)
VALUES('Gladiator', 'Ridley Scott', '2000', 'Action');

INSERT INTO movies (title, director, year, genre)
VALUES ('The Social Network', 'David Fincher', '2010', 'Drama');

INSERT INTO movies (title, director, year, genre)
VALUES('The Matrix', 'The Wachowskis', 1999, 'Sci-Fi');

INSERT INTO movies (title, director, year, genre)
VALUES ('Mad Max: Fury Road', 'George Miller', '2015', 'Action');

INSERT INTO movies (title, director, year, genre)
VALUES ('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime');

4. Start the server:
   
node index.js

Your server should now be running on http://localhost:8080.

## Usage with Insomnia

You can test the API using Insomnia by performing the following operations:

- *GET /movies*: Retrieve all movies.
- *GET /movies/{id}*: Retrieve a movie by its ID.
- *POST /movies*: Create a new movie (provide a JSON body with movie data).
- *PUT /movies/{id}*: Update a movie by its ID (provide a JSON body with updated data).
- *DELETE /movies/{id}*: Delete a movie by its ID.

## Error Handling

- *404 Not Found*: If a movie is not found by its ID.
- *400 Bad Request*: If required fields are missing when creating or updating a movie.

## Conclusion

This project provides an easy-to-use API for managing a movie collection with the capability to create, read, update, and delete movies. The API is built with Node.js, Express, and MySQL, and it includes basic validation and error handling.

Repository: Bacong, Angel Kay R. (movies_db ACTIVITY-CRUD)
