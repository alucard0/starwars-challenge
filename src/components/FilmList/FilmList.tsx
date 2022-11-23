import { useEffect, useState } from "react"
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

  const getFilms = (): void => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setFilms(data.results))
  }

  const getCharacterNames = (charactersUrls: string[]): void => {
    Promise.all(
      charactersUrls.map((url) =>
        fetch(url)
          .then(checkStatus) // check the response of our APIs
          .then(parseJSON) // parse it to Json
          .catch((error) => console.log("There was a problem!", error))
      )
    ).then((data) => {
      console.log(data)
    })
  }

  const checkStatus = (response: Response): Promise<Response> => {
    if (response.ok) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  const parseJSON = (response: Response): Promise<FilmType> => {
    return response.json()
  }

  useEffect(() => {
    getFilms()
  }, [])

  if (!films) return <p>Movies not found</p>

  return (
    <ul>
      {films.map(({ title, episode_id, characters }) => (
        <li key={episode_id}>
          {title}
          <button onClick={(): void => getCharacterNames(characters)}>More info</button>
        </li>
      ))}
    </ul>
  )
}
export default FilmList
