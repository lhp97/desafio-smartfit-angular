import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UnitResponse } from '../interfaces/unit-response.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  readonly apiURL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private httpClient: HttpClient) { }

  getAllUnits(): Observable<UnitResponse> {
    return this.httpClient.get<UnitResponse>(this.apiURL)
  }
}
