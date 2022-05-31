import * as React from 'react'
import { Helmet } from 'react-helmet'

import '../../node_modules/normalize.css/normalize.css'

export const Head = ({
	title,
	description,
}: {
	title: string
	description: string
}) => {
	const linkRef = React.useRef<HTMLLinkElement>(null)
	return (
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;800&amp;family=Overpass:wght@200;300;400&amp;display=swap"
			/>
			<link rel="icon" href="./favicon.svg" />
		</Helmet>
	)
}
