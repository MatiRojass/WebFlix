import ShowsSlider from './ShowsSlider'
import '../../styles/section.css'

const ShowsSection = ({ shows, title }) => {
	return (
		<section className='shows-section'>
			<h2 className='section-title'>{title}</h2>
			<ShowsSlider shows={shows} />
		</section>
	)
}

export default ShowsSection
