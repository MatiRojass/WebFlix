import styles from '../../styles/bigshow.module.css'
import { MdInfoOutline } from 'react-icons/md'
const IMAGES_URL = 'https://image.tmdb.org/t/p/original'
import { Link } from 'react-router-dom'

const BigShow = ({ show }) => {
	return (
		<div className={styles.bigShowContainer}>
			<div
				className={styles.bigShow}
				style={{
					backgroundImage: `url(${IMAGES_URL + show.backdrop_path})`,
				}}
			></div>

			<div className={styles.info}>
				<h2 className={styles.title}>{show.title || show.name}</h2>
				<Link
					className={styles.infoButton}
					to={`/${show.media_type}/${show.id}`}
				>
					<MdInfoOutline className={styles.infoIcon} />
					<span>Info</span>
				</Link>
			</div>
		</div>
	)
}

export default BigShow
