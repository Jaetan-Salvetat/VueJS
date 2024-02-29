import IMainApi, {HttpMethods} from "@/networking/IMainApi";
import PaginatedList from "@/networking/models/PaginatedList";
import Media from "@/models/Media";
import CreditsList from "@/networking/models/CreditsList";

export default class MovieApi extends IMainApi{
  static async getTrending(): Promise<PaginatedList<Media>> {
    return await this.makeRequest<PaginatedList<Media>>(HttpMethods.get, "/trending/movie/day?language=fr-FR")
  }

  static async getMovieDetails(id: number): Promise<Media> {
    return await this.makeRequest(HttpMethods.get, `/movie/${id}?language=fr-FR`)
  }

  static async getCredits(id: number): Promise<CreditsList> {
    return await this.makeRequest(HttpMethods.get, `/movie/${id}/credits?language=fr-FR`)
  }

  static async getRecommendations(id: number): Promise<PaginatedList<Media>> {
    return await this.makeRequest(HttpMethods.get, `/movie/${id}/recommendations?language=fr-FR`)
  }
}
