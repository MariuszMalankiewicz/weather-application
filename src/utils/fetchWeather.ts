import axios from 'axios'
import type { Weather } from '@/types/types'

export const fetchCurrentWeatherFromLocation = async (location: Location): Promise<Weather> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=817af5cfb42c312c3b5c282f65a06023&units=metric`,
    )
    const city = response.data.name
    const country = response.data.sys.country
    const timestamp = response.data.dt
    const date = new Date(timestamp * 1000).toLocaleDateString()
    const { temp, humidity, temp_max, temp_min, feels_like } = response.data.main
    const iconCode = response.data.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

    return { temp, humidity, temp_max, temp_min, feels_like, city, country, iconUrl, date }
  } catch (error) {
    console.error('Błąd pobierania pogody na podstawie lokalizacji:', error)
    return {
      temp: null,
      humidity: null,
      temp_max: null,
      temp_min: null,
      feels_like: null,
      city: null,
      country: null,
      iconUrl: null,
      date: null,
    }
  }
}

export const fetchWeatherData = async (city: string): Promise<Weather> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=817af5cfb42c312c3b5c282f65a06023&units=metric`,
    )
    const { temp, humidity } = response.data.main
    return { temp: temp, humidity: humidity }
  } catch (error) {
    console.error(`Błąd pobierania danych dla miasta ${city}:`, error)
    return { temp: null, humidity: null }
  }
}
