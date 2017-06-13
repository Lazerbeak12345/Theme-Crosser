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
	grunt.task.registerTask('mod-test', 'Tests if the internal mod function is working properly.', function(arg1, arg2) {
		
		var inpt="ui-button ui-corner-all ui-widget";
		var out="";
		var expectedOut="ui-button ui-corner-all ui-widget btn rounded";
		var tot=0;
		
		grunt.log.writeln(inpt);
		
		try {
			out=mod(inpt);
		}catch(e) {
			if (typeof (new Error("err").stack)!="undefined") {
				grunt.log.fatal(e.stack,1);//may want to change the error code later
			}else{
				grunt.log.fatal(e.toString(),1);//may want to change the error code later
			}
		}
		
		if (out===expectedOut) {
			grunt.log.write(out);
			grunt.log.ok();
			return;
		}		
		out=out.split(/[\,\s]/g);
		expectedOut=expectedOut.split(/[\,\s]/g);
		for (var i=0;i<out.length;i++) {
			if (expectedOut.includes(out[i])) {
				tot++;
			}
		}
		for (i=0;i<expectedOut.length;i++) {
			if (out.includes(expectedOut[i])) {
				tot--;
			}
		}
		if (tot!==0) {//---------------------------------------
			grunt.log.writeln(out);
			grunt.log.warn("Output didn't match what was expected",1);//may want to change the error code later
		}else{
			grunt.log.write(out);
			grunt.log.ok();
		}
	});
	grunt.registerTask('default', ['jshint','mod-test','bootlint']);
};
