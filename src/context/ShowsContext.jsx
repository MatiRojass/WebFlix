import { createContext, useContext, useEffect, useState } from 'react'
import { getMovies, getSeries, getBgShows } from '../services'

const ShowsContext = createContext()

export const ShowsProvider = ({ children }) => {
	const [movies, setMovies] = useState([])
	const [series, setSeries] = useState([])
	const [bgShows, setBgShows] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const [movies, series, bgShows] = await Promise.all([
					getMovies(),
					getSeries(),
					getBgShows(),
				])

				setMovies(movies.results || [])
				setSeries(series.results || [])
				setBgShows(bgShows.results || [])
			} catch (e) {
				setError(e.message)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return (
		<ShowsContext.Provider value={{ movies, series, bgShows, error, loading }}>
			{children}
		</ShowsContext.Provider>
	)
}

export const useShows = () => useContext(ShowsContext)
