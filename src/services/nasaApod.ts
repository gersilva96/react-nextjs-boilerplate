/**
 * @packageDocumentation
 * @module Services/NasaApod
 * Interacts with the NasaApod service.
 */
import axios, { AxiosResponse } from 'axios';

/**
 * API Client to interact with the service.
 */
const APIClient = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  timeout: 10000,
  params: {
    api_key: 'Ng0osDnce1s3qCNKlalTpByz4rroMoqLITe1RZp9',
  },
});

/**
 * Interacts with the NASA - APOD service.
 */
class NasaApod {
  /**
   * Gets a picture by date.
   */
  async get(date: string): Promise<string> {
    const url = `/apod?date=${date}`;
    let response: AxiosResponse;
    let result;
    try {
      response = await APIClient.get(url);
      result = response.status === 200 ? response.data.url : '';
    } catch (error) {
      result = '';
    }
    return result;
  }
}

export default new NasaApod();
