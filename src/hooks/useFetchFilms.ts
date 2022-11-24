import { useEffect, useState } from "react"
import { FilmType } from "src/components/FilmList/Film.type"
import { fetchFilms } from "src/api/fetchFilms"

type ReturnType = {
  films: FilmType[]
  isFetching: boolean
}

export const useFetchFilms = (): ReturnType => {
  const [films, setFilms] = useState<FilmType[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(true)

  const getFilms = (): void => {
    fetchFilms()
      .then((data) => data && setFilms(data.results))
      .finally(() => {
        setIsFetching(false)
      })
  }

  useEffect(() => {
    getFilms()
  }, [])

  return { films, isFetching }
}
