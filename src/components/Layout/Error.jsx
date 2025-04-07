import styles from '../../styles/error.module.css'

const Error = ({ error }) => {
	console.log(error)
	return (
		<div className={styles.error}>
			<p>{error}</p>
		</div>
	)
}
export default Error
