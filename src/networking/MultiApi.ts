import IMainApi, {HttpMethods} from "@/networking/IMainApi";
import PaginatedList from "@/networking/models/PaginatedList";
import Serie from "@/models/Serie";
import Media from "@/models/Media";

export default class MultiApi extends IMainApi {
  static async search(query: string): Promise<PaginatedList<Media>> {
    return (await this.makeRequest<PaginatedList<Serie>>(
      HttpMethods.get,
      `/search/multi?query=${query}&language=fr-FR`
    ))
  }
}
