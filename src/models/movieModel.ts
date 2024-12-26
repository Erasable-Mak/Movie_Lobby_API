import mongoose, { Document, Schema } from 'mongoose'; // Import mongoose and necessary types (Document, Schema)

// Define the interface for the Movie document to ensure proper types for the movie properties
export interface IMovie extends Document {
  title: string; // Movie title (string)
  genre: string; // Movie genre (string)
  rating: number; // Movie rating (number)
  streamingLink: string; // Streaming link (string)
}

// Define the schema for the Movie model, mapping the structure of a movie document in MongoDB
const movieSchema: Schema<IMovie> = new Schema({
  title: { type: String, required: true }, // Title is required and should be of type String
  genre: { type: String, required: true }, // Genre is required and should be of type String
  rating: { type: Number, required: true }, // Rating is required and should be of type Number
  streamingLink: { type: String, required: true }, // Streaming link is required and should be of type String
});

// Create a model for the 'Movie' collection based on the schema defined above
const Movie = mongoose.model<IMovie>('Movie', movieSchema);

// Export the Movie model so it can be used in other parts of the application
export default Movie;
