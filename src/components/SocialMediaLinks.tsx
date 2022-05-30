import * as React from 'react'

import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Twitter from '../images/twitter.svg'
import YouTube from '../images/youtube.svg'

const defaultIconSize = 32

export const SocialMediaLinks = ({ iconSize }: { iconSize?: number }) => (
	<>
		<a
			href="https://twitter.com/volt_camp"
			title="volt.camp on Twitter"
			target="_blank"
		>
			<Twitter
				alt="Twitter"
				width={iconSize ?? defaultIconSize}
				heigh={iconSize ?? defaultIconSize}
			/>
		</a>
		<a
			href="https://instagram.com/volt.camp"
			title="volt.camp on Instagram"
			target="_blank"
		>
			<Instagram
				alt="Instagram"
				width={iconSize ?? defaultIconSize}
				heigh={iconSize ?? defaultIconSize}
			/>
		</a>
		<a
			href="https://facebook.com/volt.camp"
			title="volt.camp on Facebook"
			target="_blank"
		>
			<Facebook
				alt="Facebook"
				width={iconSize ?? defaultIconSize}
				heigh={iconSize ?? defaultIconSize}
			/>
		</a>
		<a
			href="https://www.youtube.com/channel/UC5hWeHGNJroaHjwA4gF8IrQ"
			title="volt.camp on YouTube"
			target="_blank"
		>
			<YouTube
				alt="YouTube"
				width={iconSize ?? defaultIconSize}
				heigh={iconSize ?? defaultIconSize}
			/>
		</a>
	</>
)
