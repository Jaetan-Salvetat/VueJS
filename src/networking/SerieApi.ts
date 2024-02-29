import IMainApi, {HttpMethods} from "@/networking/IMainApi";
import PaginatedList from "@/networking/models/PaginatedList";
import CreditsList from "@/networking/models/CreditsList";
import Serie from "@/models/Serie";

export default class SerieApi extends IMainApi {
  static async getTrending(): Promise<PaginatedList<Serie>> {
    return await this.makeRequest<PaginatedList<Serie>>(HttpMethods.get, "/trending/tv/day?language=fr-FR")
  }

  static async getMovieDetails(id: number): Promise<Serie> {
    return await this.makeRequest(HttpMethods.get, `/tv/${id}?language=fr-FR`)
  }

  static async getCredits(id: number): Promise<CreditsList> {
    return await this.makeRequest(HttpMethods.get, `/tv/${id}/credits?language=fr-FR`)
  }

  static async getRecommendations(id: number): Promise<PaginatedList<Serie>> {
    return await this.makeRequest(HttpMethods.get, `/tv/${id}/recommendations?language=fr-FR`)
  }

  static async search(query: string): Promise<PaginatedList<Serie>> {
    return (await this.makeRequest<PaginatedList<Serie>>(
      HttpMethods.get,
      `/search/tv?query=${query}&language=fr-FR`
    ))
  }
}
