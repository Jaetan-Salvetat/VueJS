import {MediaType} from "@/models/MediaType";
import Genre from "@/models/Genre";

export default interface Media {
  id: number
  title: string
  backdropPath: string
  voteAverage: number
  mediaType: MediaType
  releaseDate: Date
  overview: string
  genres: [Genre]
}
