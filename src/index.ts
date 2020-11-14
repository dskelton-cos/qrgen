import app from './server'
import log from './utils/log'
import { connectDatabase } from './database'
import { print as runningAt } from 'running-at'

/**
 * Connect to database and listen to given port
 */
async function startServer() {
	try {
		await connectDatabase()
		const PORT = process.env.PORT || 3000
		app.listen(PORT, () => runningAt(PORT))
	} catch (error) {
		log.error('Server setup failed. Wrong server IP or authentication?')
		log.error(error)
		process.exit(1)
	}
}
startServer()