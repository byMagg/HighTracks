export interface Track {
  id: number
  name: string
  duration_ms: number
  album: {
    images: [{
      height: number
      url: string
      width: number
    }]
  }
}