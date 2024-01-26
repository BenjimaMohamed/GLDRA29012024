import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  apiUrl = 'http://localhost:8090/insertion.php';

  constructor(private http: HttpClient) {}

  inscription(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(this.apiUrl, data, httpOptions).pipe(
      catchError((error) => {
        let errorMessage = 'Erreur lors de la requête HTTP : ';

        if (error instanceof HttpErrorResponse) {
          if (error.status === 0) {
            errorMessage += 'Aucune réponse du serveur.';
          } else {
            errorMessage += `Statut ${error.status}, ${error.statusText}`;
          }
        } else {
          errorMessage += `Erreur inconnue : ${error}`;
        }

        return throwError(errorMessage);
      })
    );
  }
}
