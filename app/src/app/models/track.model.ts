export interface Track {
  id: string
  name: string
  duration_ms: number
  album: Album
  external_urls: string
  popularity: number
  preview_url: string
}

export interface Album {
  artists: Artist[]
  external_urls: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
}

export interface Artist {
  external_urls: string
  id: string
  name: string
  uri: string
}

export interface Image {
  height: number
  url: string
  width: number
}