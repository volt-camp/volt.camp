import * as React from 'react'

import * as boxStyles from './box.module.css'

export const Box: React.FunctionComponent<{
	children?: React.ReactNode | undefined
}> = ({ children }) => <div className={boxStyles.box}>{children}</div>
