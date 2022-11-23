import { useState } from "react"

type CharacterType = {
  name: string
}

const CharacterDetail = ({
  charactersUrls,
}: {
  charactersUrls: string[]
}): JSX.Element => {
  const [characters, setCharacters] = useState<CharacterType[] | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getCharacterNames = (charactersUrls: string[]): void => {
    setIsLoading(true)
    Promise.all(
      charactersUrls.map((url) =>
        fetch(url)
          .then(checkStatus)
          .then(parseJSON)
          .catch((error) => console.log("There was a problem!", error))
      )
    )
      .then((data) => {
        console.log(data)
        const x = data as CharacterType[]
        setCharacters(x)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const checkStatus = (response: Response): Promise<Response> => {
    if (response.ok) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  const parseJSON = (response: Response): Promise<CharacterType> => {
    return response.json()
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
