import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from 'src/app/interfaces/location.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit, OnChanges {

  @Input() unitList: Location[] = []

  constructor() {

  }
  ngOnChanges(): void {
  }

  ngOnInit(): void {

  }

}
