import axios from 'axios'
import type { City } from '@/types/types'

export const fetchCitiesData = async (): Promise<City[]> => {
  try {
    const response = await axios.get('/city.list.json')
    return response.data // zakładając, że odpowiedź zawiera listę miast
  } catch (error) {
    console.error('Błąd podczas ładowania pliku JSON:', error)
    return []
  }
}
