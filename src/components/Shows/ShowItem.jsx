import { Link } from 'react-router-dom'
import { IMAGES_URL } from '../../config'
import style from '../../styles/show.module.css'

const ShowItem = ({ show }) => {
	return (
		<div key={show.id} className={style.show}>
			<Link to={`/${show.media_type}/${show.id}`}>
				<img src={IMAGES_URL + show.poster_path} alt='' />
				<h4 className={style.title}>{show.title || show.name}</h4>
			</Link>
		</div>
	)
}

export default ShowItem
