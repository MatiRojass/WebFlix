import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IMAGES_URL } from '../config'
import { getShowById } from '../services'
import styles from '../styles/details.module.css'
import Loader from '../components/Layout/Loader'
import Error from '../components/Layout/Error'

const formatFecha = (fecha) =>
	new Date(fecha.replaceAll('-', '/')).toLocaleDateString('es-AR', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	})

const ShowDetails = () => {
	const { type, id } = useParams()
	const [show, setShow] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true)
				const raw = await getShowById(id, type)

				const normalized = {
					id: raw.id,
					title: raw.title || raw.name,
					tagline: raw.tagline || null,
					overview: raw.overview,
					poster_path: raw.poster_path,
					backdrop_path: raw.backdrop_path,
					vote_average: raw.vote_average.toFixed(1),
					release_date: formatFecha(raw.release_date || raw.first_air_date),
					genres: raw.genres,
					runtime: raw.runtime || raw.episode_run_time?.[0] || null,
					homepage: raw.homepage,
					status: raw.status,
					seasons: raw.seasons || null,
				}

				setShow(normalized)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		getData()
	}, [type, id])

	if (loading) return <Loader />

	if (error) return <Error error={error} />

	return (
		<div className={styles.container}>
			<div
				className={styles.showDetailBg}
				style={{
					backgroundImage: `url(${IMAGES_URL}${show.backdrop_path})`,
				}}
			/>
			<div className={styles.infoContainer}>
				<div className={styles.side}>
					<img
						src={IMAGES_URL + show.poster_path}
						alt=''
						className={styles.poster}
					/>
				</div>
				<div className={styles.details}>
					<div className={styles.titleContainer}>
						<h2 className={styles.title}>{show.title}</h2>
						{show.tagline && <p className={styles.tagline}>{show.tagline}</p>}
					</div>
					<div className={styles.info}>
						<div className={styles.shortInfo}>
							<div className={styles.infoPill}>
								<span>⭐</span>
								<span>{show.vote_average}/10</span>
							</div>
							<div className={styles.infoPill}>
								<span>📆</span>
								<span>{show.release_date}</span>
							</div>
							{show.runtime && (
								<div className={styles.infoPill}>
									<span>🕑</span>
									<span>{show.runtime} minutos</span>
								</div>
							)}
						</div>
						{show.homepage && (
							<div className={styles.webSite}>
								<span>🔗 Sitio Oficial: </span>
								<a href={show.homepage}>{show.homepage}</a>
							</div>
						)}
						<div className={styles.state}>
							<span>📺 Estado: </span>
							<span>{show.status}</span>
						</div>
					</div>
					<ul className={styles.genresList}>
						{show.genres.map((genre, index) => (
							<li key={index} className={styles.genre}>
								{genre.name}
							</li>
						))}
					</ul>
					<hr />
					<div className={styles.overview}>
						<p>{show.overview}</p>
					</div>
				</div>
				{show.seasons && (
					<div className={styles.seasons}>
						<h3 className={styles.seasonsTitle}>Temporadas</h3>
						<div className={styles.seasonsContainer}>
							{show.seasons.map((season, index) => (
								<details key={index} className={styles.seasonDetail}>
									<summary>
										{season.season_number}. {season.name}
										<i class='fa-solid fa-chevron-down'></i>
									</summary>
									<div className={styles.seasonInfo}>
										<p>{season.overview}</p>
										<span>Episodios: {season.episode_count}</span>
									</div>
								</details>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default ShowDetails
