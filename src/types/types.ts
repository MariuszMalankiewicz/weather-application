export interface Weather {
  temp: number | null
  humidity: number | null
  temp_max: number | null
  temp_min: number | null
  feels_like: number | null
  city: string | null
  country: string | null
  iconUrl: string | null
  date: string | null
}

export interface City {
  id: number
  name: string
  weather: Weather
}

export interface Location {
  lat: number
  lon: number
}
