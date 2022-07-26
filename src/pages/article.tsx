import { Link } from 'gatsby'
import * as React from 'react'
import { ArticleImage } from '../components/ArticleImage'
import { Footer } from '../components/footer'
import { Head } from '../components/head'
import { Header } from '../components/header'
import '../global.module.css'
import * as articleStyles from './article.module.css'

const ArticlePage: React.FunctionComponent = () => {
	const image =
		'https://images.ctfassets.net/l9w5g6t31jrn/6IsQTLBxS4cSTNylfn4L6o/c65b43dc3ec28b66f1701358c622eb47/image.png'
	const i = new URL(image)
	i.searchParams.set('fm', 'webp')
	i.searchParams.set('w', '960')
	return (
		<>
			<Head
				title={`Van: WOF Iridium`}
				description={`The Iridium Electric Camper van by German manufacturer WOF is the world's first ready-to-purchase electric camper van.`}
			/>
			<div className={articleStyles.outer}>
				<Header />
				<div className={articleStyles.columnLayout}>
					<main className={articleStyles.main}>
						<header>
							<nav className={articleStyles.sectionNav}>
								<Link to="/tag/van">Van</Link>
								<Link to="/manufacturer/WOF">WOF</Link>
								<span>Iridium</span>
							</nav>
						</header>
						<article>
							<h1>
								The Iridium Electric Camper van by German manufacturer WOF is
								the world's first ready-to-purchase electric camper van.
							</h1>
							<div className={articleStyles.articleMeta}>
								<Link to="/author/markus">
									<img
										src="https://images.ctfassets.net/bncv3c2gt878/6CWMgqeZdCmkk6KkIUksgQ/50922090bc6566c6624c12b82a4bf78c/36671282034_427eace68d_o.jpg?w=50&amp;fm=webp"
										alt="Markus Tacker"
									/>
									Markus Tacker
								</Link>
								<span>22. June 2022</span>
							</div>
							<ArticleImage
								image={
									'https://images.ctfassets.net/l9w5g6t31jrn/6IsQTLBxS4cSTNylfn4L6o/c65b43dc3ec28b66f1701358c622eb47/image.png'
								}
								alt={'Van: WOF Iridium'}
							></ArticleImage>
							<p>
								At the Caravansalon 2019, German manufacturer{' '}
								<a href="https://wof-wohnmobile.de/" rel="noopener noreferrer">
									WOF Wohnmobile
								</a>{' '}
								presented the first fully electric campervan that is ready to
								order. A limited series of 30 vehicels is to be produced.
							</p>
							<p>
								The{' '}
								<a
									href="https://www.emr-campers.de/iridium-elektro-wohnmobil/"
									rel="noopener noreferrer"
								>
									Iridium
								</a>{' '}
								has a range of 400 km and can be charged with up to 100 kW.
							</p>
						</article>
					</main>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default ArticlePage
