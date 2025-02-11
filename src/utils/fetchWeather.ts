import axios from 'axios'
import type { Weather } from '@/types/types'

export const fetchCurrentWeatherFromLocation = async (
  location: Location,
  apiKey: string,
): Promise<Weather> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`,
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
    console.error(error)
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

export const fetchWeatherData = async (city: string, apiKey: string): Promise<Weather> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    )
    const { temp, humidity } = response.data.main

    return { temp: temp, humidity: humidity }
  } catch (error) {
    console.error(error)
    return { temp: null, humidity: null }
  }
}

export const fetch5DayWeatherForecast = async (lat: number, lon: number, apiKey: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
    )
    return response.data.list
  } catch (error) {
    console.log(error)
  }
}
