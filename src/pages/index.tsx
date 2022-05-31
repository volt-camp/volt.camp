import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { ArticleTile } from '../components/ArticleTile'
import { Box } from '../components/box'
import { Footer } from '../components/footer'
import { Head } from '../components/head'
import { Header } from '../components/header'
import Logo from '../images/logo.svg'
import * as indexStyles from './index.module.css'
import '../global.module.css'

const IndexPage: React.FunctionComponent<
	PageProps<{
		site: {
			siteMetadata: {
				title: string
				description: string
			}
		}
	}>
> = ({
	data: {
		site: {
			siteMetadata: { title, description },
		},
	},
}) => {
	return (
		<>
			<Head title={title} description={description} />
			<div className={indexStyles.outer}>
				<Header />
				<div className={indexStyles.columnLayout}>
					<main>
						<ArticleTile
							image={
								'https://images.ctfassets.net/l9w5g6t31jrn/6IsQTLBxS4cSTNylfn4L6o/c65b43dc3ec28b66f1701358c622eb47/image.png'
							}
							category={'Van'}
						></ArticleTile>
					</main>
					<aside>
						<Box>
							<div className={indexStyles.asideLogo}>
								<Logo alt={'volt.camp'} />
							</div>
							<p>The future of eco-friendly van camping is electric.</p>
							<p>
								Find all you need to learn about and enjoy camping with an
								electric vehicle.
							</p>
						</Box>
					</aside>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default IndexPage

export const query = graphql`
	{
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`
