import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/interfaces/location.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() card!: Location

  ngOnInit(): void {

  }

}
