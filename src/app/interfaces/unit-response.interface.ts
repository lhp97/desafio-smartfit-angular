import { Location } from "./location.interface";

export interface UnitResponse {
  current_country_id: number,
  locations: Location[]
}
