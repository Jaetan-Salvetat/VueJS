import axios from "axios"
import applyCaseMiddleware from 'axios-case-converter'

export default abstract class IMainApi {
  static baseUrl = import.meta.env.VITE_API_BASE_URL

  static async makeRequest<T>(method: HttpMethods, path: string): Promise<T> {
    const client = applyCaseMiddleware(axios.create()
    )
    const request = await client.request({
      method: method,
      url: `${(this.baseUrl)}/${path}`,
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    })

    console.log(request.data)

    return request.data
  }
}

export enum HttpMethods {
  get = "get"
}
