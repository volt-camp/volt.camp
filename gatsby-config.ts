import type { GatsbyConfig } from 'gatsby'

const domain = process.env.DOMAIN ?? 'volt.camp'

const config: GatsbyConfig = {
	siteMetadata: {
		title: domain,
		siteUrl: `https://${domain}`,
		description: 'The future of eco-friendly van camping is electric.',
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: process.env.GATSBY_ACCESS_TOKEN,
				spaceId: process.env.GATSBY_SPACE_ID,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon.svg',
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/,
				},
			},
		},
		'gatsby-plugin-dts-css-modules',
	],
}

export default config
