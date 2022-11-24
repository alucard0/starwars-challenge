import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react"
import CharacterDetail from "src/components/CharacterDetail/CharacterDetail"
import filmData from "src/data/films.json"
import characterData from "src/data/character.json"

describe("Character Detail", (): void => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  afterEach(cleanup)

  it("should render", (): void => {
    const { characters } = filmData.results[0]
    render(<CharacterDetail charactersUrls={characters} />)
  })

  it("should show character's name", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(characterData), {
      status: 200,
    })
    const { characters } = filmData.results[0]
    render(<CharacterDetail charactersUrls={characters} />)
    const moreInfoButton = screen.getByText("More info")
    expect(moreInfoButton).toBeInTheDocument()
    fireEvent.click(moreInfoButton)
    await waitFor(() => expect(screen.getByText("Luke Skywalker")).toBeInTheDocument())
  })
})
