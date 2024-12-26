import express, { Application, Request, Response } from 'express'; // Importing express and necessary types (Application, Request, Response)
import mongoose from 'mongoose'; // Import mongoose for database connection and model operations
import movieRoutes from './routes/movieRoutes'; // Import the movie routes from the routes folder

// Create an express application instance
const app: Application = express();

// Define the port number for the server to listen on
const PORT: number = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the movie routes for any route that matches the ones defined in movieRoutes
app.use(movieRoutes);

// Establish a connection to MongoDB
mongoose
  .connect('mongodb://localhost:27017/movielobby') // Connect to the 'movielobby' database on localhost
  .then(() => console.log('Connected to MongoDB')) // Log a success message if connected successfully
  .catch((err) => console.error(err)); // Log any errors that occur during the connection

// Define a simple route to serve a welcome message when accessing the root URL ('/')
app.get('/', (req: Request, res: Response): void => {
  res.send('Movie Lobby API'); // Respond with a message indicating the Movie Lobby API is working
});

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`); // Log a message to indicate the server is running and listening
});
