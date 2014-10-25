'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		mochaTest: {
			options: {
				timeout: 5000,
			},
			src: 'src/test/*.js',
		},
	});

	grunt.registerTask('runMochaTest', '', function() {
		grunt.task.run(['mochaTest']);
	});

	grunt.registerTask('default', ['mochaTest', 'runMochaTest']);
};
