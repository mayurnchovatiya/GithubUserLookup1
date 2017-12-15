import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  //Service to retrieve user detail
  getUser(name: string): Observable<any> {
    let gitHubUrl = 'https://api.github.com/users/';
    return this.http.get(gitHubUrl + name, httpOptions);
  }

  //Service to retrieve user repo detail
  getRepo(url: string): Observable<any> {
    return this.http.get(url, httpOptions);
  }
}
