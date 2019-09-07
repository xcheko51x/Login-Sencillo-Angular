import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  URL = "http://localhost/Angular/";

  constructor(private http: HttpClient) { }

  loginUsuario(login) {
    return this.http.post(`${this.URL}Login.php`, JSON.stringify(login));
  }

}
