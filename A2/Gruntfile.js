module.exports = function ( grunt ) {
 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 var taskConfig = {
   jshint: {
     src: ['*.js', "!Gruntfile.js"],
     gruntfile: ['Gruntfile.js'],
     options: {
     	globals: {
          jQuery: true
        }
     }
   },
   uglify: {
   	src: ['*.js'],
   	gruntfile: ['Gruntfile.js'],
   	options: {
   		banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
   	}
   }
 };
 grunt.initConfig(taskConfig);
 grunt.registerTask('default', ['jshint']);
};