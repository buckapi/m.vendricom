import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GlobalService } from './service/global.service';
import { AuthPocketbaseService } from './service/auth-pocketbase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [/* RouterOutlet, */
    CommonModule,
    /* HomeComponent */
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'm.vendricom';
  constructor(public global:GlobalService,
    public auth:AuthPocketbaseService
  ){
}
}
