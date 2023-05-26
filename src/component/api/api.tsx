import CardsResponse from "../../types/CardsResponse";
import cardsResponseMock from "../Mocks";

interface IApi {
  baseUrl: string;
  headers: Record<string, string>;
}

class Api implements IApi {
  baseUrl: string;
  headers: Record<string, string>;

  constructor(config: IApi) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  async getCards(count: number) : Promise<CardsResponse> {
    const res = await fetch(`${this.baseUrl}?page=${count}`, { method: 'GET', headers: this.headers });
    const data = await res.json();
    return data;

    // Mock:
    // return new Promise<CardsResponse>((resolve, reject) => {
    //   resolve(cardsResponseMock);
    // });
  }
}

const api = new Api({
  baseUrl: 'https://testguru.ru/frontend-test/api/v1/items',
  headers: {
    "content-type": "application/json",
  }
});

export { api, IApi };
