#!/usr/bin/env node

"use strict";

var os = process.platform;
var exec = require('child_process').exec, child;

if (os == 'win32') {
console.log('WIN INSTALLING ANDROID BUILD TOOLS')
	child = exec('npm.cmd install android-build-tools -g').stderr.pipe(process.stderr);
}else if(os == 'darwin'){
console.log('MAC INSTALLING ANDROID BUILD TOOLS')
	child = exec('npm install android-build-tools -g').stderr.pipe(process.stderr);
}

// console.log(child)
// npm list --depth 1 -g android-build-tools > /dev/null 2>&1