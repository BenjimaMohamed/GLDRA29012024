// restaurant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class restaurantService {
  private apiUrl = 'http://localhost:8090/restaurateur.php/'; // Mettez l'URL correcte de votre API
  private apiUrl1 = 'http://localhost:8090/valider.php/'

  constructor(private http: HttpClient) {}

  getrestaurants(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'votre_api_pour_recuperer_les_restaurants');
  }
  validerrestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl1 + 'votre_api_pour_valider_restaurant', restaurant);
  }

  refuserrestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl1 + 'votre_api_pour_refuser_restaurant', restaurant);
  }

}