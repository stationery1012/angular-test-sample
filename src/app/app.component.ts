import { Component } from '@angular/core';
import { AService } from './a.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hoge';

  constructor(private aService: AService) {
    this.title = this.aService.getValue();
  }
}
