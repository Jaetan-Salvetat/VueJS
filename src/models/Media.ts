import Genre from "@/models/Genre";
import Cast from "@/models/Cast";

export default interface Media {
  id: number
  title: string
  rating: number
  backdropPath: string
  voteAverage: number
  overview: string
  genres: [Genre]
  releaseDate:  Date
  cast: [Cast]
  recommendations: [Media]
  test: string
}
