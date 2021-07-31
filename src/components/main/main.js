import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Results } from './results/results'
import { Filter } from './filter/filter'
import styles from './main.module.scss'
import people from '../../assets/svg/ilustra_header.svg'
import { Dropdown } from './dropdown/dropdown'
import { ThemeContext } from '../../utils/styles/theme-context'
import { key } from '../../key'
export const Main = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [data, setData] = useState([])
	const [search, setSearch] = useState('')
	const [isSearching, setIsSearching] = useState(false)
	const [showOptions, setShowOptions] = useState(false)

	const { darkMode } = useContext(ThemeContext)
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			setIsError(false)
			if (isSearching) {
				try {
					const fetchedData = await axios(
						'https://api.giphy.com/v1/gifs/search',
						{
							params: {
								api_key: key,
								limit: '12',
								q: search,
							},
						}
					)
					setData(fetchedData.data.data)
				} catch (err) {
					setIsError(true)
					console.log(err)
					console.log(isError)
				}
			}
			setIsLoading(false)
			setIsSearching(false)
			setShowOptions(false)
		}
		fetchData()
	}, [isSearching])

	const handleIsSearching = (value) => {
		setIsSearching(value)
	}

	const handleShowOptions = (value) => {
		setShowOptions(value)
	}

	const handleSearch = (value) => {
		setSearch(value)
	}
	return (
		<div className={styles.main}>
			<h1
				className={`${darkMode ? styles.dark : styles.light}  ${styles.title}`}
			>
				¡Inspirate y busca los mejores{' '}
				<span className={styles.span}>GIFS!</span>
			</h1>
			<img src={people} />
			<Filter
				search={search}
				handleSearch={handleSearch}
				handleIsSearching={handleIsSearching}
				isSearching={isSearching}
				showOptions={showOptions}
			/>
			<Dropdown
				showOptions={showOptions}
				handleShowOptions={handleShowOptions}
				handleIsSearching={handleIsSearching}
				search={search}
				handleSearch={handleSearch}
			/>
			<Results isLoading={isLoading} data={data} />
		</div>
	)
}
