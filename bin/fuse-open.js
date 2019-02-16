#!/usr/bin/env node

"use strict";

var version = '0.0.1';

var program = require('commander');

program
  .version(version, '-v, --version')
  .version(version, '-V, --version')
  .description('CLI of Fuse Open')
  .command('build [platform]', 'Build on local | ios | android')
  .command('preview [platform]', 'Preview on local | ios | android')
  .command('install [tool_name]', 'Installs tools')
  .command('config [env]', 'Displays information about your Uno environment local | global')
  .command('create [project_name]', 'Creates a new project file')
  .command('add [filename.type]', 'Creates a new file of type ux | uxl | md | gitignore | js | json ')
  .command('doctor', 'Repair or rebuild packages found in search paths')
  .command('clean [platform]', 'Delete generated build and cache directories in project(s) of all | local | ios | android')
  .command('kill [platform]', 'Kills Fuse Open processes (even the daemon) of all | local | ios | android')
  .command('studio [cmd]', 'Opens Fuse Studio')
  .command('uno [cmd]', 'Runs Uno specific commands', {noHelp: true})
  ;

program
	.on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ fuseopen build local');
    console.log('  $ fuseopen build ios');
    console.log('  $ fuseopen preview android');
    console.log('  $ fuseopen install android');
    console.log('  $ fuseopen create MyApp');
    console.log('  $ fuseopen doctor');
  });

program
  .parse(process.argv);