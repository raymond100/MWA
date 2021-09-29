const { spawn } = require('child_process');

console.log("start");

// non-blocking
spawn('node', ["../Assignment-01/fibonacci", "50"], { stdio: 'inherit' })
spawn('node', ["../Assignment-01/fibonacci", "15"], { stdio: 'inherit' });
spawn('node', ["../Assignment-01/fibonacci", "25"], { stdio: 'inherit' });

console.log("end");
