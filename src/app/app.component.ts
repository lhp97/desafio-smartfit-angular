import { Component } from '@angular/core';
import { UnitService } from './services/unit.service';
import { Location } from './interfaces/location.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showList = new BehaviorSubject(false);
  unitList: Location[] = []

  constructor(private unitService: UnitService) {}

  onSubmit() {
    this.unitList = this.unitService.getFilteredUnits();
    this.showList.next(true)
  }
}
