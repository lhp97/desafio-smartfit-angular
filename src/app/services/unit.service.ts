import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UnitResponse } from '../interfaces/unit-response.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../interfaces/location.interface'

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  readonly apiURL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([])
  private allUnits$: Observable<Location[]> = this.allUnitsSubject.asObservable()
  private filteredUnits: Location[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitResponse>(this.apiURL).subscribe(data => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations
    })
  }

  getAllUnits(): Observable<Location[]> {
    return this.allUnits$
  }

  getFilteredUnits() {
    return this.filteredUnits
  }

  setFilteredUnits(value: Location[]) {
    this.filteredUnits = value
  }
}
