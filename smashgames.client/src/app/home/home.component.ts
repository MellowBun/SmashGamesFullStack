import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Studio } from '../Models/studio';
import { DataService } from '../data.service';
import { Game } from '../Models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  studio$: BehaviorSubject<Studio> = this.data.studio$;
  games$: BehaviorSubject<Game[]> = this.data.games$;
  constructor(private data: DataService) {

  }
}
