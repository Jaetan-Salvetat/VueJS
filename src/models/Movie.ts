import Genre from "@/models/Genre";
import Cast from "@/models/Cast";

export default interface Movie {
  id: number
  title: string
  rating: number
  backdropPath: string
  voteAverage: number
  overview: string
  genres: [Genre]
  releaseDate:  Date
  cast: [Cast]
  recommendations: [Movie]
  test: string
}
