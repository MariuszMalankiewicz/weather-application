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
          alert('Enable location in the site settings')
          reject(`Error Downloading Location: ${error.message}`)
        },
      )
    } else {
      reject('This solution does not support geolocation.')
    }
  })
}
