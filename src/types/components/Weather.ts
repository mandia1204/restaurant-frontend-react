export interface WeatherLocation {
  id: number,
  locationName: string
}

export interface Forecast {
  id: number,
  date: string,
  temperatureC: number,
  temperatureF: number,
  state: string,
  stateAbbr: string
}
