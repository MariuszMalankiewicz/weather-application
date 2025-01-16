import axios from 'axios'
import type { Weather } from '@/types/types'

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
