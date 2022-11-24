import { render, screen, cleanup, waitFor } from "@testing-library/react"
import FilmList from "src/components/FilmList/FilmList"
import filmData from "src/data/films.json"

describe("FilmList", (): void => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  afterEach(cleanup)

  it("should render", (): void => {
    fetchMock.mockResponseOnce(JSON.stringify(filmData), {
      status: 200,
    })
    render(<FilmList />)
  })
  it("should show message when films are empty", async () => {
    fetchMock.mockRejectOnce(new Error("Not Found"))
    render(<FilmList />)
    await waitFor(() => expect(screen.getByText("Films not found")).toBeInTheDocument())
  })

  it("should show message loading when is fetching", (): void => {
    fetchMock.mockResponseOnce(JSON.stringify(filmData), {
      status: 200,
    })
    render(<FilmList />)
    expect(screen.getByText("Loading ...")).toBeInTheDocument()
  })
  it("should show the film list", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(filmData), {
      status: 200,
    })
    render(<FilmList />)
    await waitFor(() => expect(screen.getByText("A New Hope")).toBeInTheDocument())
  })
})
