import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  // Private info
  // private client_id = '';
  // private client_secret = '';

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get('https://api.github.com/users/' + username);
    // return this.http.get('https://api.github.com/users/' + username +
    //   '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
  }

  getRepos (username: string) {
    return this.http.get('https://api.github.com/users/' + username + '/repos');
    // return this.http.get('https://api.github.com/users/' + username +
    //   '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
  }

}

