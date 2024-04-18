import { Component, afterNextRender, afterRender } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-stand-only';
  constructor(private router:Router) {
    // run once the all component render
    afterNextRender(() => {
      console.log("test");
      
    });
    // run every time the all component render
    afterRender(() => {
      console.log("test2");
      
    });

  }
  move() {
    this.router.navigateByUrl('/about')
  }
}
