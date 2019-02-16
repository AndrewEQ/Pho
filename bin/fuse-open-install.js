#!/usr/bin/env node

"use strict";

var version = '0.0.1';

var fuseOpenVersionToBeInstalled = '';

var program = require('commander');

program
  .version(version, '-v, --version')
  .version(version, '-V, --version')
  .description('Fuse Open Installer');

program  
  .command('android', 'Installs and sets up Android SDK and NDK components')
  .command('uno [version] [type]', 'Installs a version of Uno locally | globally')
  .command('fuselibs [version] [type]', 'Installs a version of Fuselibs locally | globally')
  .command('[version] [type]', 'Installs a combined version of Uno and Fuselibs locally | globally')
  // .command('preview', 'Installs Fuse Open Preview')
  // .command('studio', 'Installs Fuse Open Studio')
  
  .action(function (version) {
  	// console.log('Version: ' + version);
  	fuseOpenVersionToBeInstalled = version;
  });
  ;

program
  .on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ fuseopen install android');
    console.log('  $ fuseopen install uno 1.9');
    console.log('  $ fuseopen install fuselibs 1.10');
    console.log('  $ fuseopen install 1.11');
  });

program  
  .parse(process.argv);


var installVersion = false;

switch(fuseOpenVersionToBeInstalled) {
	case '1.11.0': installVersion = true;
		break;
}
if (installVersion) {

	console.log('ATTEMPTING TO INSTALL FUSE OPEN ' + fuseOpenVersionToBeInstalled + ' Uno & Fuselibs');	
}


