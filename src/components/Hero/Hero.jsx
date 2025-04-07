// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

// import required modules
import { Autoplay } from 'swiper/modules'

import BigShow from './BigShow'
import { useShows } from '../../context/ShowsContext'

const Hero = () => {
	const { bgShows } = useShows()

	return (
		<section className='hero-container'>
			<Swiper
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 30000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className='mySwiper'
			>
				{bgShows.map((show) => (
					<SwiperSlide key={show.id}>
						<BigShow show={show} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Hero
