Movie Lobby API

A backend API for a movie lobby system for OTT applications. The API allows users to list, search, add, update, and delete movies in a movie lobby. It is built using Node.js, Express, TypeScript, and MongoDB.
Features

    List all movies in the lobby.
    Search for a movie by title or genre.
    Add a new movie to the lobby (admin access required).
    Update existing movie details (admin access required).
    Delete a movie from the lobby (admin access required).

Technologies Used

    Node.js: JavaScript runtime for the server-side.
    Express.js: Web framework for Node.js.
    MongoDB: NoSQL database to store movie data.
    Mongoose: ODM for MongoDB to manage data models.
    TypeScript: Superset of JavaScript that adds static types.
    Jest: Testing framework for writing unit and integration tests.
    ESLint: Linter to ensure code quality and consistency.
    Postman: To Update, Delete, Add new movies

Prerequisites

Before you begin, ensure you have the following installed:

    Node.js (v14 or higher)
    MongoDB (for local development)

Installation and Setup
1. Clone the Repository

Clone this repository to your local machine:

git clone https://github.com/your-username/movie-lobby-api.git
cd movie-lobby-api

2. Install Dependencies

Install the required dependencies using npm:

npm install

3. Set Up MongoDB

    Local MongoDB: If you don’t have MongoDB installed, follow the installation guide on MongoDB's official website for your platform.
    Start MongoDB: If MongoDB is already installed, run the following command to start it locally:

mongod

The database will run on mongodb://localhost:27017/movielobby.
4. Configure the Application

    By default, the app will connect to a local MongoDB instance at mongodb://localhost:27017/movielobby. If you want to use a different database or a cloud database, update the MongoDB URI in the src/app.ts file.

5. Run the Application

Once the dependencies are installed and MongoDB is running, start the application with the following command:

npm start

The server will be running on http://localhost:3000.
6. Accessing the API Endpoints

You can now use Postman, cURL, or any API testing tool to interact with the following endpoints.
List All Movies

    Endpoint: GET /movies
    Description: Lists all the movies in the lobby.
    Response:

    [
      {
        "id": "movieId",
        "title": "Movie Title",
        "genre": "Action",
        "rating": 8.5,
        "streamingLink": "http://example.com"
      }
    ]

Search Movies by Title or Genre

    Endpoint: GET /search?q={query}
    Description: Searches for movies based on the provided title or genre (case-insensitive).
    Example: GET /search?q=action
    Response:

    [
      {
        "id": "movieId",
        "title": "Action Movie",
        "genre": "Action",
        "rating": 7.9,
        "streamingLink": "http://example.com"
      }
    ]

Add a New Movie

    Endpoint: POST /movies
    Description: Adds a new movie to the lobby.
    Request Body:

{
  "title": "New Movie",
  "genre": "Drama",
  "rating": 9.2,
  "streamingLink": "http://example.com"
}

Response:

    {
      "id": "newMovieId",
      "title": "New Movie",
      "genre": "Drama",
      "rating": 9.2,
      "streamingLink": "http://example.com"
    }

Update Movie Details (Admin Only)

    Endpoint: PUT /movies/{id}
    Description: Updates an existing movie's details such as title, genre, rating, or streaming link.
    Request Body:

{
  "title": "Updated Movie",
  "genre": "Comedy",
  "rating": 8.0,
  "streamingLink": "http://new-link.com"
}

Response:

    {
      "id": "movieId",
      "title": "Updated Movie",
      "genre": "Comedy",
      "rating": 8.0,
      "streamingLink": "http://new-link.com"
    }

Delete Movie (Admin Only)

    Endpoint: DELETE /movies/{id}
    Description: Deletes a movie from the lobby.
    Response:

{
  "message": "Movie deleted",
  "deletedMovie": {
    "id": "movieId",
    "title": "Movie Title",
    "genre": "Action",
    "rating": 8.5,
    "streamingLink": "http://example.com"
  }
}