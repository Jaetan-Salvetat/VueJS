import IMainApi, {HttpMethods} from "@/networking/IMainApi";
import PaginatedList from "@/networking/models/PaginatedList";
import Movie from "@/models/Movie";
import CreditsList from "@/networking/models/CreditsList";

export default class MovieApi extends IMainApi {
  static async getTrending(): Promise<PaginatedList<Movie>> {
    return await this.makeRequest<PaginatedList<Movie>>(HttpMethods.get, "/trending/movie/day?language=fr-FR")
  }

  static async getMovieDetails(id: number): Promise<Movie> {
    return await this.makeRequest(HttpMethods.get, `/movie/${id}?language=fr-FR`)
  }

  static async getCredits(id: number): Promise<CreditsList> {
    return await this.makeRequest(HttpMethods.get, `/movie/${id}/credits?language=fr-FR`)
  }

  static async getRecommendations(id: number): Promise<PaginatedList<Movie>> {
    return await this.makeRequest(HttpMethods.get, `/movie/${id}/recommendations?language=fr-FR`)
  }

  static async search(query: string): Promise<PaginatedList<Movie>> {
    return (await this.makeRequest<PaginatedList<Movie>>(
      HttpMethods.get,
      `/search/movie?query=${query}&language=fr-FR`
    ))
  }
}
