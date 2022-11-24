import { CharacterType } from "src/components/CharacterDetail/Character.type"
import { fetchData } from "./utils"
export const fetchCharacters = (charactersUrls: string[]) => {
  return Promise.all(charactersUrls.map((url) => fetchData<CharacterType>(url)))
}
