import { Request, Response } from 'express'; // Import Request and Response types from Express
import Movie from '../models/movieModel'; // Import the Movie model from the models folder

// Controller to get all movies from the database
export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch all movies from the database
    const movies = await Movie.find();
    // Send the list of movies as the response in JSON format
    res.json(movies);
  } catch (err: any) {
    // If an error occurs, respond with status 500 and the error message
    res.status(500).json({ message: err.message });
  }
};

// Controller to search for movies based on title or genre
export const searchMovies = async (req: Request, res: Response): Promise<void> => {
  const query: string = req.query.q as string; // Cast the search query from the URL to a string
  try {
    // Search for movies where the title or genre matches the query (case-insensitive search)
    const movies = await Movie.find({
      $or: [{ title: new RegExp(query, 'i') }, { genre: new RegExp(query, 'i') }],
    });
    // Send the list of matching movies as the response in JSON format
    res.json(movies);
  } catch (err: any) {
    // If an error occurs, respond with status 500 and the error message
    res.status(500).json({ message: err.message });
  }
};

// Controller to add a new movie to the database
export const addMovie = async (req: Request, res: Response): Promise<void> => {
  // Destructure movie details from the request body
  const { title, genre, rating, streamingLink }: { title: string, genre: string, rating: number, streamingLink: string } = req.body;
  try {
    // Create a new movie instance and save it to the database
    const newMovie = new Movie({ title, genre, rating, streamingLink });
    await newMovie.save();
    // Respond with status 201 and the newly created movie
    res.status(201).json(newMovie);
  } catch (err: any) {
    // If an error occurs, respond with status 400 and the error message
    res.status(400).json({ message: err.message });
  }
};

// Controller to update an existing movie's details
export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params; // Get the movie ID from the request parameters
  // Destructure updated movie details from the request body
  const { title, genre, rating, streamingLink }: { title?: string, genre?: string, rating?: number, streamingLink?: string } = req.body;
  try {
    // Find the movie by ID and update the details, returning the updated movie
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, genre, rating, streamingLink },
      { new: true }
    );
    // Respond with the updated movie
    res.json(updatedMovie);
  } catch (err: any) {
    // If an error occurs, respond with status 400 and the error message
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete a movie from the database
export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params; // Get the movie ID from the request parameters
  try {
    // Find the movie by ID and delete it from the database
    const deletedMovie = await Movie.findByIdAndDelete(id);
    // Respond with a message confirming the deletion and the deleted movie details
    res.json({ message: 'Movie deleted', deletedMovie });
  } catch (err: any) {
    // If an error occurs, respond with status 400 and the error message
    res.status(400).json({ message: err.message });
  }
};
