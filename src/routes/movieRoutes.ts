import express, { Router } from 'express'; // Import express and Router from express
import { getAllMovies, searchMovies, addMovie, updateMovie, deleteMovie } from '../controllers/movieController'; // Import controller functions

// Create an instance of Router
const router: Router = express.Router();

// Define the route to get all movies (GET request to '/movies')
router.get('/movies', getAllMovies);

// Define the route to search for movies based on a query (GET request to '/search')
router.get('/search', searchMovies);

// Define the route to add a new movie (POST request to '/movies')
router.post('/movies', addMovie);

// Define the route to update a movie's details (PUT request to '/movies/:id', where :id is the movie's ID)
router.put('/movies/:id', updateMovie);

// Define the route to delete a movie (DELETE request to '/movies/:id', where :id is the movie's ID)
router.delete('/movies/:id', deleteMovie);

// Export the router to be used in the main app file
export default router;
