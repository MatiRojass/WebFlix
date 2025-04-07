import { useRef } from 'react'
import ShowItem from './ShowItem'
import '../../styles/slider.css'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useEffect } from 'react'

const ShowsSlider = ({ shows }) => {
	const sliderRef = useRef(null)
	const rigthRef = useRef(null)
	const leftRef = useRef(null)

	const getItemWidth = () => {
		if (!sliderRef.current) return 0
		const firstItem = sliderRef.current.firstChild
		if (!firstItem) return 0

		const itemWidth = firstItem.offsetWidth
		const sliderStyle = getComputedStyle(sliderRef.current)
		const gap = parseInt(sliderStyle.gap) || 0

		return itemWidth + gap
	}

	const getVisibleItems = () => {
		if (!sliderRef.current) return 1
		return Math.floor(sliderRef.current.offsetWidth / getItemWidth())
	}

	const scrollByItems = (numItems) => {
		const itemWidth = getItemWidth()
		sliderRef.current.scrollBy({
			left: itemWidth * numItems,
			behavior: 'smooth',
		})
	}

	const scrollLeft = () => {
		scrollByItems(-getVisibleItems())
	}

	const scrollRight = () => {
		scrollByItems(getVisibleItems())
	}

	const updateButtons = () => {
		if (!sliderRef.current) return

		leftRef.current.hidden = sliderRef.current.scrollLeft === 0
		rigthRef.current.hidden =
			sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
			sliderRef.current.scrollWidth
	}

	useEffect(() => {
		updateButtons()
		window.addEventListener('resize', updateButtons)
		return () => window.removeEventListener('resize', updateButtons)
	}, [])

	return (
		<div className='slider-container'>
			<div className='slider' ref={sliderRef} onScroll={updateButtons}>
				{shows.map((show) => (
					<ShowItem show={show} key={show.id} />
				))}
			</div>
			<button
				className='slider-button left-button'
				onClick={scrollLeft}
				ref={leftRef}
			>
				<MdArrowBackIos size={24} />
			</button>
			<button
				className='slider-button right-button'
				onClick={scrollRight}
				ref={rigthRef}
			>
				<MdArrowForwardIos size={24} />
			</button>
		</div>
	)
}

export default ShowsSlider
