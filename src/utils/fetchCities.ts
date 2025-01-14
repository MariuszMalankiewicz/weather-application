import axios from 'axios'

export const fetchCitiesData = async () => {
  try {
    const response = await axios.get('/city.list.json')
    return response.data
  } catch (error) {
    console.error('Błąd podczas ładowania pliku JSON:', error)
    return []
  }
}
