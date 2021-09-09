// this configuration file is overridden by whatever is in
// $HOME/.config/pro-presenter-control.json

const config = {

	obs:
		{
			host: 'localhost',
			port: 5555,
			pass: 'vb',
		},

	controllers: {

		pro: [
			{
				host: 'localhost',
				port: 57172,
				sd_pass: 'av',
				version: 7,
				triggers: [],
			},
		],
		
	 }
};

module.exports = config;
