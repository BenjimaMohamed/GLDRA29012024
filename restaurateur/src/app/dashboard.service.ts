// dashboard.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardData } from './dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getDashboardData(): Observable<DashboardData> {
    return of({
      totalSales: 15000,
      totalOrders: 120,
      popularDish: 'Spaghetti Bolognese',
      imageUrl: 'assets/images/restaurant-image.jpg',
    });
  }
}
