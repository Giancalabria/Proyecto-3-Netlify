import { useContext } from 'react'
import { ThemeContext } from '../../../utils/styles/theme-context'
import styles from './delete.module.scss'
import PropTypes from 'prop-types'
export const Delete = ({ setSearch, setIsSearching }) => {
	const { darkMode } = useContext(ThemeContext)
	return (
		<button
			className={`${darkMode ? styles.darkButton : styles.lightButton}  ${
				styles.button
			}`}
			onClick={() => {
				setSearch('')
				setIsSearching(true)
			}}
		>
			Borrar búsqueda
		</button>
	)
}

Delete.propTypes = {
	setSearch: PropTypes.func,
	setIsSearching: PropTypes.func,
}
