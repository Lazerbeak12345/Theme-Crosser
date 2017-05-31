var mod=require("./themecrosser.js");

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['*.js']
		},
		bootlint: {
			options: {
				stoponerror: false,
				relaxerror: []
			},
			files: ['index.html']
		}
	});	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-bootlint');
	grunt.registerTask('Mod-function test', 'Tests if the internal mod function is working properly', function() {
		var inpt="ui-button ui-corner-all ui-widget",
			out=mod(inpt),
			expectedOut="ui-button ui-corner-all ui-widget btn rounded",
			tot=0;
		grunt.log.writeln(inpt);
		grunt.log.writeln(out);
		if (out==expectedOut) return;
		out=out.split(/[\,\s]/g);
		expectedOut=expectedOut.split(/[\,\s]/g);
		for (var i=0;i<out.length;i++) {
			if (expectedOut.includes(out[i])) {
				tot++;
			}
		}
		if (tot!=expectedOut.length) {
			grunt.fail.warn("Output didn't match what was expected",1);//may want to change the error code later
		}
	});
	grunt.registerTask('default', ['jshint','bootlint']);
};
