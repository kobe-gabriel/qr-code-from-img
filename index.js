const fs = require('fs');
const QrCode = require('qrcode-reader');

const Jimp = require("jimp");
const buffer = fs.readFileSync(__dirname + '/image.png');
Jimp.read(buffer, function (err, image) {
  if (err) {
    console.error('First: ', err);
    // TODO handle error
  }
  console.log('Image: ', image);
  const qr = new QrCode();
  qr.callback = function (err, value) {
    if (err) {
      console.error('Second: ', err);
      // TODO handle error
    }
    console.log('Value: ', value);
    //console.log(value.result);
  };
  qr.decode(image.bitmap);
});