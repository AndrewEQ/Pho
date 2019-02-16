#!/usr/bin/env node

"use strict";

var version = '0.0.1';

var unoVersionToBeInstalled = '';
var installType = 'local';

var os = process.platform;
var exec = require('child_process').exec, child;
var program = require('commander');

program
  .version(version, '-v, --version')
  .version(version, '-V, --version')
  .description('Uno Installer');

program  
  .command('[version] [type]', 'Installs a version of Uno locally | globally')
  // .command('preview', 'Installs Fuse Open Preview')
  // .command('studio', 'Installs Fuse Open Studio')
  
  .action(function (version, type) {
  	console.log('VERSION: ' + version);
  	console.log('TYPE: ' + type);
  	unoVersionToBeInstalled = version;
  	switch(type) {
  		case '-l':
  		case 'l':
  		case 'local':
  		case 'locally':
  			installType = 'local';
  			break;
  		case '-g':
  		case 'g':
  		case 'global':
  		case 'globally':
  			installType = 'global';
  			break;
  	}
  });
  ;

program
  .on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ fuseopen install uno 1.9');
  });

program  
  .parse(process.argv);

// npm install @fuse-open/uno

var installVersion = false;

switch(unoVersionToBeInstalled) {
	case '1.11.0': installVersion = true;
		break;
}

if (installVersion) {

	console.log('ATTEMPTING TO INSTALL UNO ' + unoVersionToBeInstalled + ':' + installType);
	if (os == 'win32') {
	console.log('WIN INSTALLING UNO@' + unoVersionToBeInstalled)
		child = exec('npm.cmd install @fuse-open/uno@' + unoVersionToBeInstalled).stderr.pipe(process.stderr);
	}else if(os == 'darwin'){
	console.log('MAC INSTALLING UNO@' + unoVersionToBeInstalled)
		child = exec('npm install @fuse-open/uno@' + unoVersionToBeInstalled).stderr.pipe(process.stderr);
	}

}
