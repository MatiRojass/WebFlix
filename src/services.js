import { API_KEY, API_URL, lang_param } from './config'

const headers = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${API_KEY}`,
}
const config = { method: 'GET', headers }

export const getMovies = async () => {
	const res = await fetch(`${API_URL}/trending/movie/day?${lang_param}`, config)
	if (!res.ok) {
		throw new Error('Error al recuperar las peliculas')
	}
	return res.json()
}

export const getSeries = async () => {
	const res = await fetch(`${API_URL}/trending/tv/day?${lang_param}`, config)
	if (!res.ok) {
		throw new Error('Error al recuperar las series')
	}
	return res.json()
}

export const getBgShows = async () => {
	const res = await fetch(`${API_URL}/trending/all/day?${lang_param}`, config)
	if (!res.ok) {
		throw new Error('Error al recuperar las peliculas')
	}
	return res.json()
}

export const getShowById = async (id, type) => {
	if (!id || !type) throw new Error('No se especifico un id o type')

	const res = await fetch(`${API_URL}/${type}/${id}?${lang_param}`, config)
	if (!res.ok) {
		throw new Error('Error al recuperar el show')
	}
	return res.json()
}
