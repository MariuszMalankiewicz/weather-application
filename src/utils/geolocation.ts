// src/utils/geolocation.ts
import type { Location } from '@/types/types'

export const getLocation = (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        },
        (error) => {
          reject(`Błąd pobierania lokalizacji: ${error.message}`)
        },
      )
    } else {
      reject('Geolokalizacja nie jest wspierana w tej przeglądarce.')
    }
  })
}
