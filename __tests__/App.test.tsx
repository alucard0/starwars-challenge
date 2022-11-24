import { render, screen, cleanup } from "@testing-library/react"
import App from "../src/App"
import filmData from "src/data/films.json"

describe("App", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  afterEach(cleanup)

  it("should render", () => {
    fetchMock.mockResponseOnce(JSON.stringify(filmData), {
      status: 200,
    })
    render(<App />)
    const title = screen.getByText(/StarWars films/i)
    expect(title).toBeInTheDocument()
  })
})
