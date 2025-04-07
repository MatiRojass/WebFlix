import ShowsSection from '../Shows/ShowsSection'
import { useShows } from '../../context/ShowsContext'
import Loader from './Loader'
import Error from './Error'

const MainShows = () => {
	const { movies, series, loading, error } = useShows()

	if (loading) return <Loader />

	if (error) return <Error error={error} />

	return (
		<main>
			<ShowsSection title='Movies' shows={movies} />
			<ShowsSection title='Series' shows={series} />
		</main>
	)
}

export default MainShows
