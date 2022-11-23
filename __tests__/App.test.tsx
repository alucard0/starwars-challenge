import { render, screen } from "@testing-library/react"
import App from "../src/App"

test("renders learn react link", () => {
  render(<App />)
  const title = screen.getByText(/StarWars films/i)
  expect(title).toBeInTheDocument()
})
