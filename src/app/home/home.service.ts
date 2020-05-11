import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getUsersData() {
    const url = '../../assets/data/users.json';
    return this.httpClient.get(url);
  }
}
