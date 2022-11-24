import { useFetchFilms } from "src/hooks/useFetchFilms"
import CharacterDetail from "../CharacterDetail/CharacterDetail"

const FilmList = (): JSX.Element => {
  const { films, isFetching } = useFetchFilms()
  const isEmptyFilms = films.length === 0

  if (isFetching) return <p>Loading ...</p>
  if (isEmptyFilms) return <p>Films not found</p>

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
