const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();
require('dotenv-flow').config();

const config = {
  user: process.env.USER_NAME,
  password: process.env.USER_PASS,
  host: process.env.FTP_HOST,
  post: process.env.FTP_PORT,
  localRoot: __dirname + process.env.LOCAL_ROOT,
  remoteRoot: process.env.REMOTE_ROOT,
  include: [
    '*.html',
    '*.js',
    '*.js.map',
    '*.json',
    'manifest.webmanifest',
    'admin/*',
    'static/**/*',
    'galeria/*',
    'img/*',
    'icons/*',
    'page-data/*',
    'propuestas/*',
    'hoja-de-vida/*',
    'videos/*',
    'junta-directiva/*',
    'images/*',
    'static/*',
    '404/'
  ],
  deleteRemote: false,
  exclude: [
    'app-cal/',
    'app-cal/*',
    'app-cal/**/*'
  ],
  forcePasv: true
}

ftpDeploy.deploy(config, (err, res) => {
  if (err) console.log(err) 
  else console.log('finished', res);
});

ftpDeploy.on('uploading', (data) => {
  data.totalFilesCount;
  data.transferredFileCount;
  data.filename;
});

ftpDeploy.on('uploaded', (data) => {
  console.log(data);
});

ftpDeploy.on('log', (data) => {
  console.log(data);
});
