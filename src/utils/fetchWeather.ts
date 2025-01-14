import axios from 'axios'

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=817af5cfb42c312c3b5c282f65a06023&units=metric`,
    )
    const { temp, humidity } = response.data.main
    return { temperature: temp, humidity }
  } catch (error) {
    console.error(`Błąd pobierania danych dla miasta ${city}:`, error)
    return { temperature: null, humidity: null }
  }
}
