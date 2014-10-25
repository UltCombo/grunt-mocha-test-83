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
		watch: {
			options: {
				spawn: false,
			},
			all: {
				files: 'src/**',
				tasks: ['mochaTest'],
			},
		},
	});

	grunt.registerTask('default', ['mochaTest', 'watch']);
};
