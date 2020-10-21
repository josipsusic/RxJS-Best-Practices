import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getRandomImage() {
    const baseUrl = 'https://api.unsplash.com/photos/random';
    let API_ACCESS_KEY = ''; //Register on Unsplash to get one

    return this.httpClient.get<UnsplashResponse>(baseUrl, {
      headers: {
        Authorization: `Client-ID ${API_ACCESS_KEY}`,
      },
    });
  }
}
