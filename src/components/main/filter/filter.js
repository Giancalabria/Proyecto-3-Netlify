import React, { useContext } from 'react'
import styles from './filter.module.scss'
import lupa from '../../../assets/svg/icon-search-mod-noc.svg'
import { ThemeContext } from '../../../utils/styles/theme-context'
import PropTypes from 'prop-types'
import { Delete } from './delete/delete'
export const Filter = ({
	search,
	handleSearch,
	handleIsSearching,
	showOptions,
}) => {
	const { darkMode } = useContext(ThemeContext)
	const check = () => {
		if (search.length === 0) {
			alert('Por favor, ingrese algo antes de buscar')
		}
	}
	const enterSearch = (e) => {
		let keycode = e.keyCode
		if (keycode === 13 || e.wich === 13) {
			handleIsSearching(true)
			if (search.length === 0) {
				alert('Por favor, ingrese algo antes de buscar')
			}
		}
	}
	return (
		<div className={styles.filter}>
			<input
				className={`${darkMode ? styles.dark : styles.light}  ${styles.input} ${
					showOptions && search.length
						? styles.showOptions
						: styles.notShowOptions
				}`}
				placeholder='Busque los mejores GIFs'
				value={search}
				onChange={(e) => {
					handleSearch(e.target.value)
				}}
				onKeyDown={enterSearch}
			/>
			{search.length > 0 ? (
				<Delete
					handleIsSearching={handleIsSearching}
					handleSearch={handleSearch}
				/>
			) : (
				<div
					className={`${darkMode ? styles.dark : styles.light}  ${
						styles.temporal
					}`}
				></div>
			)}
			<button
				className={`${darkMode ? styles.dark : styles.light}  ${
					styles.searchbutton
				} ${
					showOptions && search.length > 0
						? styles.showOptions
						: styles.notShowOptions
				}`}
				onClick={() => {
					handleIsSearching(true)
					check()
				}}
			>
				<img src={lupa} />
			</button>
		</div>
	)
}

Filter.propTypes = {
	search: PropTypes.string,
	handleSearch: PropTypes.func,
	handleIsSearching: PropTypes.func,
	showOptions: PropTypes.bool,
}
