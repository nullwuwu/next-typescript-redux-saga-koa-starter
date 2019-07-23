import './env'

import * as fs from 'fs'
import * as path from 'path'

import * as koa from 'koa'
import * as koaRouter from 'koa-router'
import * as next from 'next'

import { IS_DEV, PORT_APP, URL_APP } from '../lib/consts'

const app = next({ dev: IS_DEV })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = new koa()
	const router = new koaRouter()

	// give all Nextjs's request to Nextjs before anything else
	router.get('/_next/*', async (ctx) => {
		await handle(ctx.req, ctx.res)
		ctx.respond = false
	})

	router.get('/static/*', async (ctx) => {
		await handle(ctx.req, ctx.res)
		ctx.respond = false
	})

	router.get('/', async (ctx) => {
		await app.render(ctx.req, ctx.res, '/', ctx.query)
		ctx.respond = false
	})

	router.get('/robots.txt', async (ctx) => {
		ctx.type = 'txt'
		ctx.body = fs.createReadStream(
			path.join(__dirname, '../static', 'robots.txt'),
		)
		ctx.respond = false
	})

	router.get('*', async (ctx) => {
		await handle(ctx.req, ctx.res)
		ctx.respond = false
	})

	server.use(async (ctx, _next) => {
		ctx.res.statusCode = 200
		await _next()
	})

	server.use(router.routes())

	server.listen(PORT_APP, () => {
		console.log(`> Ready on ${URL_APP}`)
	})
})
