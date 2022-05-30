import * as React from 'react'

import * as articleTileStyles from './articleTile.module.css'

export const ArticleTile = ({
	image,
	category,
}: {
	image: string
	category: string
}) => (
	<div
		className={articleTileStyles.articleTile}
		style={{ backgroundImage: `url(${image})` }}
	>
		<section>
			<span className={articleTileStyles.tag}>{category}</span>
			<h1>Iridium</h1>
			<p>
				The Iridium Electric Camper van by German manufacturer WOF is the
				world's first ready-to-purchase electric camper van.
			</p>
			<dl>
				<dt>Price</dt>
				<dd>169.000 &euro;</dd>
				<dt>Range</dt>
				<dd>300 km</dd>
			</dl>
		</section>
	</div>
)
