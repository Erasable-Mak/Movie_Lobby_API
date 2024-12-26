# Movie Lobby API

A backend API for a movie lobby system for OTT applications. The API allows users to list, search, add, update, and delete movies in a movie lobby. It is built using Node.js, Express, TypeScript, and MongoDB.

## Features

- **List all movies** in the lobby.
- **Search for a movie** by title or genre.
- **Add a new movie** to the lobby (admin access required).
- **Update existing movie details** (admin access required).
- **Delete a movie** from the lobby (admin access required).

## Technologies Used

- **Node.js**: JavaScript runtime for the server-side.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store movie data.
- **Mongoose**: ODM for MongoDB to manage data models.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Jest**: Testing framework for writing unit and integration tests.
- **ESLint**: Linter to ensure code quality and consistency.
- **Postman**: For testing and interacting with API endpoints.

## Prerequisites

Before you begin, ensure you have the following installed:

- **VS Code** (or any code editor of your choice)
- **Node.js** (v14 or higher)
- **NPM** (comes with Node.js)
- **MongoDB** (for local development)
- **Postman** (for testing and interacting with API endpoints)

## Installation and Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/movie-lobby-api.git
cd movie-lobby-api
```

### 2. Step-by-Step Guide (Run below commands in "movie-lobby-api" folder)
1. Install Required Dependencies:

    npm install express mongoose

This will install Express.js, Mongoose (for MongoDB).

2. Install Development Dependencies

To use TypeScript and other necessary tools, install the following development dependencies:

    npm install typescript @types/node @types/express @types/mongoose --save-dev

This will install TypeScript and type definitions for Node.js, Express, and Mongoose.

3. Install Testing Tools (Optional but Recommended)

To write unit tests and integration tests for the API, install Jest:

    npm install jest ts-jest @types/jest --save-dev

Jest is the testing framework.
ts-jest is a TypeScript preprocessor for Jest, enabling you to write tests in TypeScript.

### 3. Set Up MongoDB/MongoDB Compass

- **Local MongoDB**: If you don’t have MongoDB installed, follow the installation guide on MongoDB's official website for your platform.
- **Start MongoDB**: If MongoDB is already installed, run the following command to start it locally:

```bash
mongod
```

The database will run on `mongodb://localhost:27017/movielobby`. Create database with name "movielobby"

### 4. Configure the Application

By default, the app will connect to a local MongoDB instance at `mongodb://localhost:27017/movielobby`. If you want to use a different database or a cloud database, update the MongoDB URI in the `src/app.ts` file.

### 5. Run the Application

Once the dependencies are installed and MongoDB is running, start the application with the following command:

```bash
npx ts-node src/app.ts
```

The server will be running on `http://localhost:3000`.

---

## API Endpoints

### List All Movies

- **Endpoint**: `GET /movies`
- **Description**: Lists all the movies in the lobby.
- **Example Request URL**: `http://localhost:3000/movies`
- **Response**:

```json
[
  {
    "id": "movieId",
    "title": "Movie Title",
    "genre": "Action",
    "rating": 8.5,
    "streamingLink": "http://example.com"
  }
]
```

### Search Movies by Title or Genre

- **Endpoint**: `GET /search?q={query}`
- **Description**: Searches for movies based on the provided title or genre (case-insensitive).
- **Example Request URL**: `http://localhost:3000/search?q=action`
- **Response**:

```json
[
  {
    "id": "movieId",
    "title": "Action Movie",
    "genre": "Action",
    "rating": 7.9,
    "streamingLink": "http://example.com"
  }
]
```

### Add a New Movie

- **Endpoint**: `POST /movies`
- **Description**: Adds a new movie to the lobby (admin access required).
- **Request URL**: `http://localhost:3000/movies`
- **Request Body**:

```json
{
  "title": "New Movie",
  "genre": "Drama",
  "rating": 9.2,
  "streamingLink": "http://example.com"
}
```

- **Response**:

```json
{
  "id": "newMovieId",
  "title": "New Movie",
  "genre": "Drama",
  "rating": 9.2,
  "streamingLink": "http://example.com"
}
```

### Update Movie Details (Admin Only)

- **Endpoint**: `PUT /movies/{id}`
- **Description**: Updates an existing movie's details such as title, genre, rating, or streaming link (admin access required).
- **Request URL**: `http://localhost:3000/movies/{movieId}`  
  (Replace `{movieId}` with the actual `id` of the movie to update.)
  
- **Request Body**:

```json
{
  "title": "Updated Movie",
  "genre": "Comedy",
  "rating": 8.0,
  "streamingLink": "http://new-link.com"
}
```

- **Response**:

```json
{
  "id": "movieId",
  "title": "Updated Movie",
  "genre": "Comedy",
  "rating": 8.0,
  "streamingLink": "http://new-link.com"
}
```

### Delete Movie (Admin Only)

- **Endpoint**: `DELETE /movies/{id}`
- **Description**: Deletes a movie from the lobby (admin access required).
- **Request URL**: `http://localhost:3000/movies/{movieId}`  
  (Replace `{movieId}` with the actual `id` of the movie to delete.)
  
- **Response**:

```json
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
```

---

## Using Postman to Test the API

To interact with the Movie Lobby API using **Postman**, follow these steps:

### 1. **List All Movies**
- Set the request type to **GET**.
- Enter the URL: `http://localhost:3000/movies`.
- Click **Send**.

### 2. **Search Movies by Title or Genre**
- Set the request type to **GET**.
- Enter the URL: `http://localhost:3000/search?q={query}` (Replace `{query}` with your search term, e.g., `action`).
- Click **Send**.

### 3. **Add a New Movie**
- Set the request type to **POST**.
- Enter the URL: `http://localhost:3000/movies`.
- In the **Body** tab, choose **raw** and set the format to **JSON**. Paste the following JSON structure:

```json
{
  "title": "New Movie",
  "genre": "Drama",
  "rating": 9.2,
  "streamingLink": "http://example.com"
}
```

- Click **Send**.

### 4. **Update an Existing Movie**
- Set the request type to **PUT**.
- Enter the URL: `http://localhost:3000/movies/{movieId}` (Replace `{movieId}` with the actual `id` of the movie you wish to update).
- In the **Body** tab, choose **raw** and set the format to **JSON**. Paste the following JSON structure:

```json
{
  "title": "Updated Movie",
  "genre": "Comedy",
  "rating": 8.0,
  "streamingLink": "http://new-link.com"
}
```

- Click **Send**.

### 5. **Delete a Movie**
- Set the request type to **DELETE**.
- Enter the URL: `http://localhost:3000/movies/{movieId}` (Replace `{movieId}` with the actual `id` of the movie you wish to delete).
- Click **Send**.

---

## Backend Problem Statement

You are tasked with building an API for a movie lobby system for OTT applications. The lobby should contain a collection of movies with the following properties:

- **genre**
- **rating**
- **streaming link**

The API should allow users to:

1. List all the movies in the lobby.
2. Search for a movie by title or genre.
3. Add a new movie to the lobby.
4. Update an existing movie’s information (title, genre, rating, or streaming link).
5. Delete a movie from the lobby.

### Requirements

- **Node.js** (JavaScript runtime)
- **MongoDB** (for storing movie data)
- **TypeScript** (for better development experience and type safety)
- **Express.js** (for building the RESTful API)
- **Mongoose** (for interacting with MongoDB)

The API should have the following endpoints:

- **GET /movies**: Lists all the movies in the lobby.
- **GET /search?q={query}**: Searches for a movie by title or genre.
- **POST /movies**: Adds a new movie to the lobby (requires "admin" role).
- **PUT /movies/:id**: Update an existing movie’s details (requires "admin" role).
- **DELETE /movies/:id**: Deletes a movie from the lobby (requires "admin" role).

---

## Additional Recommendations

- Implement **caching** (e.g., using Redis) to reduce database load and improve response times.
- Write **unit tests** and **integration tests** using Jest.
- Use **ESLint** to ensure code quality and maintainability.
- Add **role-based authentication** to restrict certain actions (like adding, updating, or deleting movies) to users with an "admin" role.  

---

This updated **README** provides clear instructions for using **Postman** to interact with the Movie Lobby API and includes the necessary information about the endpoints, including links and required request bodies.