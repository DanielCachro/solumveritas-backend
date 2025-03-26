module.exports = ({env}) => [
	'strapi::logger',
	'strapi::errors',
	'strapi::security',
	{
		name: 'strapi::cors',
		config: {
			origin: env.array('ALLOWED_DOMAINS'),
			keepHeaderOnError: true,
		},
	},
	'strapi::poweredBy',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
]
