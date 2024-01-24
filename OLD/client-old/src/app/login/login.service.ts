import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost/login.php';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<string>(this.apiUrl, formData);
  }
}
