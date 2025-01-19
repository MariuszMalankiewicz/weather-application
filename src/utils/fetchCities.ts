import axios from 'axios'
import type { City } from '@/types/types'

export const fetchCitiesData = async (): Promise<City[]> => {
  try {
    const response = await axios.get('/city.list.json')
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchCityCoordinates = async (city: string, apiKey: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    )
    return response.data.coord
  } catch (error) {
    console.error(error)
  }
}
