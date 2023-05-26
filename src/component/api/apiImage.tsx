import ImageResponse from '../../types/ImageResponse';
import { IApi } from './api'

class ApiImg implements IApi {
  baseUrl: string;
  headers: Record<string, string>;

  constructor(config: IApi) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  async getImages() : Promise<ImageResponse[]> {
    const res = await fetch(`${this.baseUrl}`, { method: 'GET', headers: this.headers });
    const data = await res.json();
    return data;
  }

}

const apiImg = new ApiImg({
  baseUrl: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=4',
  headers: {
    "content-type": "application/json",
  }
});

export default apiImg;
