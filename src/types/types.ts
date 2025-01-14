export interface Weather {
  temp: number
  humidity: number
}

export interface City {
  id: number
  name: string
  weather: Weather
}
