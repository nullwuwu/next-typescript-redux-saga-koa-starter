import Head from 'next/head'
import React from 'react'

import * as style from './index.scss'

const IndexPage = () => (
	<div style={{ padding: '10px 45px' }}>
		<Head>
			<title>Index page</title>
			<meta name="description" content="description for indexing bots" />
		</Head>
		<p>
			<br />
			<a href="/robots.txt" target="_blank">
				Robots
			</a>

			<span className={style.test}>asdadasdasdsa</span>
		</p>
	</div>
)

export default IndexPage
