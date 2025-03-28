const {mergeConfig} = require('vite')

module.exports = config => {
	return mergeConfig(config, {
		resolve: {
			alias: {
				'@': '/src',
			},
		},
		server: {
			host: '0.0.0.0',
			cors: true,
			allowedHosts: [process.env.ALLOWED_HOST || 'localhost'],
		},
	})
}
