import styles from './cards.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
export const Cards = ({ src }) => {
	return (
		<div className={styles.cards}>
			<a href={src} target='_blank' rel='noreferrer'>
				<img src={src} alt='gif' className={styles.gif} />
			</a>
		</div>
	)
}

Cards.propTypes = {
	src: PropTypes.string,
}
