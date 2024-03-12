import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  studio$: BehaviorSubject<Studio> = this.data.studio$;
  constructor(private data: DataService) {

  }
}
