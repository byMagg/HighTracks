import { Coords } from "./coords.model"

export class Track {
  _id: string
  name: string
  duration_ms?: number
  album: Album
  comments?: Comment[]
  location?: Coords

  constructor(name: string, album: Album) {
    this._id = ""
    this.name = name
    this.album = album
  }
}

export class Album {
  artists: Artist[]
  id?: string
  images: Image[]
  name: string
  release_date?: string
  release_date_precision?: string
  total_tracks?: number

  constructor(artist: string, name: string, url: string) {
    this.name = name
    this.artists = [
      {
        name: artist
      }
    ]
    this.images = [
      {
        url: url
      }
    ]
  }
}

export interface Artist {
  id?: string
  name: string
}

export interface Image {
  height?: number
  url: string
  width?: number
}

export interface Comment {
  author: string
  text: string
  score: number
}