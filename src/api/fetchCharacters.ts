import { CharacterType } from "src/components/CharacterDetail/Character.type"
import { fetchData } from "./utils"
export const fetchCharacters = (charactersUrls: string[]): Promise<CharacterType[]> => {
  return Promise.all(
    charactersUrls.map((url) => fetchData<CharacterType>(url))
  ) as Promise<CharacterType[]>
}
