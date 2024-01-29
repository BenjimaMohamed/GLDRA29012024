import { Component, OnInit } from '@angular/core';
import { restaurantService } from './restaurant.service';

@Component({
  selector: 'app-restautrant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestautrantComponent implements OnInit {

  restaurants: any[] = [];

  constructor(private restaurantService: restaurantService) {}

  ngOnInit(): void {
    this.getrestaurants();
  }

  getrestaurants(): void {
    this.restaurantService.getrestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }
  validerrestaurant(restaurant: any): void {
    this.restaurantService.validerrestaurant(restaurant).subscribe((response) => {
      console.log(response);
      // Mettez à jour la liste des restaurants après la validation
      this.getrestaurants();
    });
  }

  refuserrestaurant(restaurant: any): void {
    this.restaurantService.refuserrestaurant(restaurant).subscribe((response) => {
      console.log(response);
      // Mettez à jour la liste des restaurants après le refus
      this.getrestaurants();
    });
  }
}
 