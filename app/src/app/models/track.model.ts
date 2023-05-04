export interface Track {
  _id: string
  name: string
  duration_ms: number
  album: Album
  comments: Comment[]
}

export interface Album {
  artists: Artist[]
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
}

export interface Artist {
  id: string
  name: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface Comment {
  author: string
  text: string
  score: number
}