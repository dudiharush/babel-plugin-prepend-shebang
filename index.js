
module.exports = function visitor() {
	return {
		name: 'prepend-shebang',
		visitor: {
			Program(path) {
				path.hub.file.shebang = "/usr/bin/env node"
			}
		}
	};
};
