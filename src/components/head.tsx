import * as React from 'react'
import { Helmet } from 'react-helmet'

import '../../node_modules/normalize.css/normalize.css'

export const Head = () => {
	const linkRef = React.useRef<HTMLLinkElement>(null)
	return (
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>volt.camp</title>
			<meta
				name="description"
				content="The future of eco-friendly van camping is electric."
			/>
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
