import { LuGithub } from 'react-icons/lu'
import styles from '../../styles/footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.license}>
				© 2025 Webflix. Todos los derechos reservados.
			</p>
			<p className={styles.cratedBy}>
				Desarrollado por <strong>Matias Rojas</strong> - Proyecto personal
			</p>
			<p className={styles.projectInfo}>
				Vistas disponibles: <em>Home</em> y <em>Detalles</em> • Próximamente:
				Buscador 🔍
			</p>
			<p className={styles.credits}>
				Basado en la API de{' '}
				<a
					href='https://www.themoviedb.org/'
					target='_blank'
					className={styles.link}
				>
					TMDB
				</a>
			</p>
			<p className={styles.gitHub}>
				<a
					href='https://github.com/tu-usuario/webflix'
					target='_blank'
					className={styles.link}
				>
					<LuGithub /> Ver en GitHub
				</a>
			</p>
		</footer>
	)
}
export default Footer
