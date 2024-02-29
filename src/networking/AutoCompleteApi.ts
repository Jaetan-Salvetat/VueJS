import IMainApi, {HttpMethods} from "@/networking/IMainApi";
import PaginatedList from "@/networking/models/PaginatedList";
import AutoComplete from "@/models/AutoComplete";

export default class AutoCompleteApi extends IMainApi {
  static async search(query: string): Promise<[AutoComplete]> {
    return (await this.makeRequest<PaginatedList<AutoComplete>>(
      HttpMethods.get,
      `/search/multi?query=${query}%20stone&language=fr-FR`
    )).results
  }
}
