const { env } = process;

module.exports = {
	env: {
		NEXT_PUBLIC_EXAMPLE: env.NEXT_PUBLIC_EXAMPLE || 'http://'
	}
};
