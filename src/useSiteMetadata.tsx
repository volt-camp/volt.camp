import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = (): {
	title: string
	description: string
	siteUrl: URL
} => {
	const {
		site: {
			siteMetadata: { title, description, siteUrl },
		},
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
					}
				}
			}
		`,
	)

	return {
		title,
		description,
		siteUrl:
			process.env.NODE_ENV === 'development'
				? new URL('http://localhost:8000')
				: new URL(siteUrl),
	}
}
