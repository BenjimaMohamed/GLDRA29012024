import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { CommandesEnCoursComponent } from './commandes-en-cours/commandes-en-cours.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiquesComponent,
    CommandesEnCoursComponent,
    MenuComponent
  ],
  imports: [
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
