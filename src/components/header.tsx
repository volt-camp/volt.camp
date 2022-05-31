import * as React from 'react'

import Logo from '../images/logo.svg'
import Menu from '../images/menu.svg'
import X from '../images/x.svg'
import * as headerStyles from './header.module.css'
import { SocialMediaLinks } from './SocialMediaLinks'

export const Header = () => {
	const [menuVisible, setMenuVisible] = React.useState<boolean>(false)
	return (
		<>
			<header className={headerStyles.header}>
				<div className={headerStyles.navMain}>
					<div className={headerStyles.logo}>
						<Logo alt={'volt.camp'} />
					</div>
					{!menuVisible && (
						<button
							type="button"
							className={headerStyles.menuButton}
							title="show menu"
							onClick={() => setMenuVisible((visible) => !visible)}
						>
							<Menu />
						</button>
					)}
					{menuVisible && (
						<button
							type="button"
							className={headerStyles.menuButtonActive}
							title="hide menu"
							onClick={() => setMenuVisible((visible) => !visible)}
						>
							<X />
						</button>
					)}
				</div>
				{menuVisible && (
					<div className={headerStyles.mobileNav}>
						<nav className={headerStyles.mobileNavLinks}>
							<a href="/" className="active">
								Magazine
							</a>
							<a href="/contact">Contact</a>
						</nav>
						<nav className={headerStyles.socialMediaIcons}>
							<span>Follow us:</span>
							<SocialMediaLinks />
						</nav>
					</div>
				)}
			</header>
		</>
	)
}
