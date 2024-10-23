import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private API_URL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  searchUser(username: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${username}`);
  }
}
