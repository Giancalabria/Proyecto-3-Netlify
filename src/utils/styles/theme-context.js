import { useState } from 'react'
import { createContext } from 'react'
import PropTypes from 'prop-types'

const initialThemeContext = {
	darkMode: false,
}

export const ThemeContext = createContext(initialThemeContext)

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)
	const switchDarkMode = () => setDarkMode(!darkMode)

	return (
		<ThemeContext.Provider
			value={{
				darkMode,
				switchDarkMode,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

ThemeProvider.propTypes = {
	children: PropTypes.node,
}
