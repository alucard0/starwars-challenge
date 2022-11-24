import { useState } from "react"
import { fetchCharacters } from "src/api/fetchCharacters"
import { CharacterType } from "./Character.type"

const CharacterDetail = ({
  charactersUrls,
}: {
  charactersUrls: string[]
}): JSX.Element => {
  const [characters, setCharacters] = useState<CharacterType[] | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getCharacterNames = (charactersUrls: string[]): void => {
    setIsLoading(true)
    fetchCharacters(charactersUrls)
      .then((data) => {
        const characters = data.filter(Boolean) as CharacterType[]
        setCharacters(characters)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <button onClick={(): void => getCharacterNames(charactersUrls)}>More info</button>
      {isLoading && <p>Loading ...</p>}
      {characters && characters.map(({ name }) => <p key={name}>{name}</p>)}
    </>
  )
}

export default CharacterDetail
