import './utils/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { ThemeProvider } from './utils/styles/theme-context.js'
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
