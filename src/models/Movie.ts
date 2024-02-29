import Genre from "@/models/Genre";
import Cast from "@/models/Cast";
import Media from "@/models/Media";

export default interface Movie extends Media {
  rating: number
  cast: [Cast]
  recommendations: [Movie]
}
