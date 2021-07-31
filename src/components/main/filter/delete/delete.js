import { useContext } from 'react'
import { ThemeContext } from '../../../../utils/styles/theme-context'
import styles from './delete.module.scss'
import PropTypes from 'prop-types'
import { ReactComponent as Tacho } from '../../../../assets/svg/tacho.svg'
export const Delete = ({ setSearch, handleSearch }) => {
	const { darkMode } = useContext(ThemeContext)
	return (
		<button
			className={`${darkMode ? styles.darkButton : styles.lightButton}  ${
				styles.button
			}`}
			onClick={() => {
				setSearch('')
				handleSearch(true)
			}}
		>
			<Tacho
				className={`${darkMode ? styles.dark : styles.light}  ${styles.svg}`}
			/>
		</button>
	)
}

Delete.propTypes = {
	setSearch: PropTypes.func,
	handleSearch: PropTypes.func,
}
