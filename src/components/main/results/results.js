import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Cards } from './cards/cards'
import styles from './results.module.scss'
import { ThemeContext } from '../../../utils/styles/theme-context'
export const Results = ({ data, isLoading }) => {
	const { darkMode } = useContext(ThemeContext)
	const renderGifs = data.map((objeto, index) => (
		<Cards key={index} src={objeto.images.fixed_height.url} />
	))

	if (isLoading) {
		return (
			<div className={styles.resultsDiv}>
				<p className={`${darkMode ? styles.dark : styles.light}`}>
					Resultados de la búsqueda
				</p>
				<div className={styles.loader}>
					<i
						className={`${darkMode ? styles.dark : styles.light} ${
							styles.spinner
						}`}
					/>
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.resultsDiv}>
				<p className={`${darkMode ? styles.dark : styles.light}`}>
					Resultados de la búsqueda
				</p>
				{data.length > 0 ? (
					<div
						className={`${darkMode ? styles.dark : styles.light}  ${
							styles.results
						}`}
					>
						{renderGifs}
					</div>
				) : (
					<h3
						className={`${darkMode ? styles.dark : styles.light}  ${
							styles.noData
						}`}
					>
						No se han encontrado resultados
					</h3>
				)}
			</div>
		)
	}
}

Results.propTypes = {
	data: PropTypes.array,
	isLoading: PropTypes.bool,
	search: PropTypes.string,
}
