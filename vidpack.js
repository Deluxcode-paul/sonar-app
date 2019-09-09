#!/usr/bin/env node

// written by alec armbruster for sonar software, llc.
// all rights reserved by sonar software, llc.

var exec = require('child_process').exec;
var program = require('commander');
var Promise = require('bluebird');

function promiseFromChildProcess(child) {
    return new Promise(function (resolve, reject) {
        child.addListener("error", reject);
        child.addListener("exit", resolve);
    });
}

program
  .version('0.0.1')
  .arguments('<vid>')
  .action(function (vid) {
     vidLoc = vid;
  });

program.parse(process.argv);

if (typeof vidLoc === 'undefined') {
   console.error('no command given!');
   process.exit(1);
}

console.log("awaiting conversion results...");
promiseFromChildProcess(exec('ffmpeg -i ' + vidLoc + '.mp4 -vcodec libvpx -crf 18 -b:v 0 -an ' + vidLoc + '.webm')).then(function (result) {
console.log("done - converted " + vidLoc + ".mp4 to .webm");
}, function (err) {
    console.log('fail - file rejected: ' + err);
});

promiseFromChildProcess(exec('ffmpeg -i ' + vidLoc + '.mp4 -vcodec libvpx  -vf scale=544:-2 -crf 18 -b:v 0 -an ' + vidLoc + '_small.webm')).then(function (result) {
console.log("done - converted " + vidLoc + ".mp4 to mobile .webm");
}, function (err) {
    console.log('fail - file rejected: ' + err);
});

promiseFromChildProcess(exec('ffmpeg -i ' + vidLoc + '.mp4 -vf scale=544:-2 -crf 18 -b:v 0 -an ' + vidLoc + '_small.mp4')).then(function (result) {
console.log("done - converted " + vidLoc + ".mp4 to mobile .mp4");
console.log("done!");
}, function (err) {
    console.log('fail - file rejected: ' + err);
});