import { Coords } from "./coords.model"

export interface Comment {
    author: string
    text: string
    score: number
    location?: Coords
}