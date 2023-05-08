import { Album } from "./album.model"
import { Coords } from "./coords.model"
import { Comment } from "./comment.model"

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