import * as React from 'react'

import * as footerStyles from './footer.module.css'
import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = () => (
	<footer className={footerStyles.footer}>
		<nav>
			<SocialMediaLinks iconSize={32} />
		</nav>
		<aside>
			&copy;2022{' '}
			<strong>
				volt<small>.camp</small>
			</strong>
			. All rights reserved.
		</aside>
	</footer>
)
