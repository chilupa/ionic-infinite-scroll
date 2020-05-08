import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getUsersData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(url);
  }
}
