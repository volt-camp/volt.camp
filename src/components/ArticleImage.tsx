import * as React from 'react'

import * as articleImageStyles from './articleImage.module.css'

export const ArticleImage = ({ image, alt }: { image: string; alt }) => {
	const i = new URL(image)
	i.searchParams.set('fm', 'webp')
	i.searchParams.set('w', '960')
	return (
		<img className={articleImageStyles.image} src={i.toString()} alt={alt} />
	)
}
