import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './options.module.scss'
import { ThemeContext } from '../../../../utils/styles/theme-context'
export const Options = ({ tag, handleSearch, error }) => {
	const { darkMode } = useContext(ThemeContext)

	if (tag) {
		return (
			<p
				className={`${darkMode ? styles.darkBack : styles.lightBack}  ${
					styles.option
				}`}
				onClick={() => handleSearch(tag)}
			>
				{tag}
			</p>
		)
	} else {
		return (
			<p
				className={`${darkMode ? styles.darkBack : styles.lightBack}  ${
					styles.option
				}`}
			>
				{error}
			</p>
		)
	}
}

Options.propTypes = {
	tag: PropTypes.string,
	handleSearch: PropTypes.func,
	error: PropTypes.string,
}
