import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreditcardsComponent } from './creditcards/creditcards.component';
  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,MatIconModule,MatSidenavModule,CreditcardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'creditcardadmin';
  sidebarOpen = true;

  toggleSidebar(){
  this.sidebarOpen=this.sidebarOpen? false : true;
  }
}
