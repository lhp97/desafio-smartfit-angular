import { Injectable } from '@angular/core';
import { Location } from '../interfaces/location.interface';

const OPENING_HOURS = {
  morning: {
    first: '06',
    last: '12'
  },
  afternoon: {
    first: '12',
    last: '18'
  },
  night: {
    first: '18',
    last: '23'
  }
}

type TYPE_HOURS = 'morning' | 'afternoon' | 'night';

@Injectable({
  providedIn: 'root'
})
export class FilterUnitServicesService {

  constructor() { }

  filter(results: Location[], showClosed: boolean, hour: string) {
    let intermediateResults = results;

    if (!showClosed) {
      intermediateResults = results.filter(result => result.opened);
    }

    if (hour) {
      intermediateResults = intermediateResults.filter(location => this.filterUnitsToHour(location, hour));
    }

    return intermediateResults;
  }

  filterUnitsToHour(unit: Location, hourFiltered: string) {
    if (!unit.schedules) {
      return true;
    }

    const openHour = OPENING_HOURS[hourFiltered as TYPE_HOURS].first;
    const closeHour = OPENING_HOURS[hourFiltered as TYPE_HOURS].last;

    let openHourFilter = parseInt(openHour, 10);
    let closeHourFilter = parseInt(closeHour, 10);
    let today = this.transformWeekDays(new Date().getDay());

    for (let i = 0; i< unit.schedules.length; i++) {
      let schedule_hour = unit.schedules[i].hour;
      let schedule_weekdays = unit.schedules[i].weekdays;

      if (schedule_hour !== 'Fechada' && today === schedule_weekdays) {

          let [unit_open_hour, unit_close_hour] = schedule_hour.split( 'às' );
          let start_hour_int = parseInt(unit_open_hour.replace('h', ''), 10);
          let end_hour_int = parseInt(unit_close_hour.replace('h', ''), 10);

          if (start_hour_int <= openHourFilter && end_hour_int >= closeHourFilter) {
            return true;
          }
      }

    }

    return false;

  }

  transformWeekDays(day: number) {

    switch(day) {
      case 0:
        return 'Dom.';
      case 6:
        return 'Sáb.'
      default: return 'Seg. à Sex.'
    }

  }
}
