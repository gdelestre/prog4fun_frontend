import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;
  private baseUrl = "http://prog4fun-env-1.eba-nedvvcb3.eu-west-3.elasticbeanstalk.com/authentification";

  constructor(private http: HttpClient, private dataSharingService: DataSharingService) {
  }

  authenticationService(username: String, password: String) {
    return this.http.get(this.baseUrl,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    // Dès que l'utilisateur est enregistré on change la valeur pour afficher les composants.
    this.dataSharingService.isUserLoggedIn.next(true);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
