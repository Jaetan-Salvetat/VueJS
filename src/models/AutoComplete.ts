import {MediaType} from "@/models/MediaType";

export default interface AutoComplete {
  id: string
  name: string
  title: string
  profilePath: string
  backdropPath: string
  mediaType: MediaType
}
