const apiURL = "https://swapi.dev/api/films"
import { FilmType } from "src/components/FilmList/Film.type"
import { fetchData } from "./utils"

type ResponseType = {
  count: number
  next: string | null
  previous: string | null
  results: FilmType[]
}

export const fetchFilms = (): Promise<ResponseType> => {
  return fetchData<ResponseType>(apiURL) as Promise<ResponseType>
}
