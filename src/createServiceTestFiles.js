const Service = require('node-windows').Service;
const path = require('path')
const fs = require('fs');

const scriptPath = path.join(__dirname, 'main.js');


const daemonFolderPath = path.join(__dirname, 'daemon');
if (!fs.existsSync(daemonFolderPath)) {
  fs.mkdirSync(daemonFolderPath);
}

const svc = new Service({
  name: 'newNodeJS',
  description: 'service de test',
  script: scriptPath
});

svc.on('install', function () {
  svc.start();
});
svc.install();


