import React, { useContext } from 'react'
import { Header } from './components/header/header'
import { Main } from './components/main/main'
import styles from './App.module.scss'
import { ThemeContext } from './utils/styles/theme-context'
import './utils/styles/global.scss'
export const App = () => {
	const { darkMode } = useContext(ThemeContext)
	return (
		<div className={`${darkMode ? styles.dark : styles.light}  ${styles.app}`}>
			<Header />
			<Main />
		</div>
	)
}
