import { useShows } from '../context/ShowsContext'
import Hero from '../components/Hero/Hero'
import MainShows from '../components/Layout/MainShows'
import Loader from '../components/Layout/Loader'
import Error from '../components/Layout/Error'

const Home = () => {
	const { loading, error } = useShows

	if (loading) return <Loader />

	if (error) return <Error error={error} />

	return (
		<>
			<Hero />
			<MainShows />
		</>
	)
}

export default Home
