import { useEffect, useState } from "react"
import CharacterDetail from "../CharacterDetail/CharacterDetail"
const apiURL = "https://swapi.dev/api/films"

type FilmType = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}
/*
type ResponseType = {
  count: number
  next: string | null
  previous: string | null
  results: FilmType[]
}*/
const FilmList = (): JSX.Element => {
  const [films, setFilms] = useState<FilmType[] | null>(null)
  const controller = new AbortController()
  const getFilms = (): void => {
    fetch(apiURL, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => setFilms(data.results))
  }

  useEffect(() => {
    getFilms()
    return () => {
      controller.abort()
    }
  }, [])

  if (!films) return <p>Movies not found</p>

  return (
    <ul>
      {films.map(({ title, episode_id, characters }) => (
        <li key={episode_id}>
          {title}
          <CharacterDetail charactersUrls={characters} />
        </li>
      ))}
    </ul>
  )
}
export default FilmList
