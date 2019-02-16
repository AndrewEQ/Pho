#!/usr/bin/env node

"use strict";

var os = process.platform;
var exec = require('child_process').exec, child;

if (os == 'win32') {
console.log('WIN INSTALLING FUSELIBS')
	child = exec('npm.cmd install https://ci.appveyor.com/api/buildjobs/ne9p3tso2p0etydv/artifacts/fuse-open-fuselibs-1.10.0-rc1.tgz').stderr.pipe(process.stderr);
}else if(os == 'darwin'){
console.log('MAC INSTALLING FUSELIBS')
	child = exec('npm install https://ci.appveyor.com/api/buildjobs/ne9p3tso2p0etydv/artifacts/fuse-open-fuselibs-1.10.0-rc1.tgz').stderr.pipe(process.stderr);
}