import { Link } from 'react-router-dom'
import styles from '../../styles/header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.titleContainer}>
				<Link to={'/'}>
					<h1 className={styles.webTitle}>WebFlix</h1>
				</Link>
			</div>
			<span disabled>Buscar</span>
		</header>
	)
}

export default Header
