import React, { useContext } from 'react'
import logo from '../../assets/svg/logo-desktop.svg'
import logoDark from '../../assets/svg/logo-mobile-modo-noct.svg'
import styles from './header.module.scss'
import { ThemeContext } from '../../utils/styles/theme-context'
export const Header = () => {
	const { darkMode, switchDarkMode } = useContext(ThemeContext)
	return (
		<div className={styles.header}>
			<img className={styles.logo} src={darkMode ? logoDark : logo} />
			<button
				className={`${darkMode ? styles.darkButton : styles.lightButton}  ${
					styles.button
				}`}
				onClick={switchDarkMode}
			>
				{darkMode ? 'LIGHT' : 'DARK'} MODE
			</button>
		</div>
	)
}
