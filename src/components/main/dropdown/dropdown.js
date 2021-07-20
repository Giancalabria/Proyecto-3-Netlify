import styles from './dropdown.module.scss'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Options } from './options/options'
import { ThemeContext } from '../../../utils/styles/theme-context'
import { key } from '../../key'
import PropTypes from 'prop-types'
export const Dropdown = ({
	setShowOptions,
	search,
	setIsSearching,
	showOptions,
	setSearch,
}) => {
	const [data, setData] = useState([])
	const { darkMode } = useContext(ThemeContext)
	const mappedOptions =
		data.length > 0 ? (
			data.map((objeto, index) => (
				<Options key={index} tag={objeto.name} setSearch={setSearch} />
			))
		) : (
			<Options error='No se han encontrado sugerencias de búsqueda' />
		)

	useEffect(() => {
		if (search > 0) {
			setShowOptions(false)
		} else {
			setShowOptions(true)
		}
	}, [search])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedData = await axios(
					'https://api.giphy.com/v1/gifs/search/tags',
					{
						params: {
							api_key: { key },
							limit: '4',
							q: search,
						},
					}
				)
				setData(fetchedData.data.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchData()
	}, [search])

	return (
		<div
			className={`${darkMode ? styles.darkDropdown : styles.lightDropdown}  ${
				styles.dropdown
			} ${
				search.length > 0 && showOptions ? styles.visible : styles.invisible
			} `}
			onClick={() => {
				setIsSearching(true)
				setShowOptions(false)
			}}
		>
			{mappedOptions}
		</div>
	)
}

Dropdown.propTypes = {
	setShowOptions: PropTypes.func,
	search: PropTypes.string,
	setIsSearching: PropTypes.func,
	showOptions: PropTypes.bool,
	setSearch: PropTypes.func,
}
