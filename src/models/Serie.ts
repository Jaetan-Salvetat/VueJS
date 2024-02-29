import Media from "@/models/Media";
import Genre from "@/models/Genre";
import Cast from "@/models/Cast";

export default interface Serie extends Media {
  rating: number
  cast: [Cast]
  recommendations: [Serie]
}
