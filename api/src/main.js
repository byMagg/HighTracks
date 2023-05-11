const app = require("./app");
const port = 3000
const https = require('https');
const fs = require('fs');

const options = {
};
try {
  options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/webapps.masterdevevelopment.tech/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/webapps.masterdevevelopment.tech/privkey.pem')
  };
} catch (error) {
}

https.createServer(options, app).listen(3000, () => {
  console.log(`HighTracks API running on port ${port}`)
})
// app.listen(port, () => {
//   console.log(`HighTracks API running on port ${port}`)
// })