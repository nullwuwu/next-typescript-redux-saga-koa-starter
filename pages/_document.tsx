import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
