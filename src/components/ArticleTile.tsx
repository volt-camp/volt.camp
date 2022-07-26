import * as React from 'react'

import { Link } from 'gatsby'

import * as articleTileStyles from './articleTile.module.css'

export const ArticleTile = ({
	image,
	category,
	link,
}: {
	image: string
	category: string
	link: string
}) => {
	const i = new URL(image)
	i.searchParams.set('fm', 'webp')
	i.searchParams.set('w', '960')
	return (
		<div className={articleTileStyles.articleTile}>
			<Link to={link}>
				<div
					className={articleTileStyles.background}
					style={{ backgroundImage: `url(${i.toString()})` }}
				></div>
				<section>
					<span className={articleTileStyles.tag}>{category}</span>
					<h1>Iridium</h1>
					<p>
						The Iridium Electric Camper van by German manufacturer WOF is the
						world's first ready-to-purchase electric camper van.
					</p>
					<dl>
						<dt>Price</dt>
						<dd>169.000&nbsp;&euro;</dd>
						<dt>Range</dt>
						<dd>300&nbsp;km</dd>
					</dl>
				</section>
			</Link>
		</div>
	)
}
