var cryptoJS = require('./cryptoJS.js');

// var key = "";//秘钥参数传递
var iv = "88888888";//向量

/**
 * 加密
 */
function encryptByDES(message,key) {
  var keyHex = cryptoJS.CryptoJS.enc.Utf8.parse(key);
  var encrypted = cryptoJS.CryptoJS.TripleDES.encrypt(message, keyHex, {
    iv: cryptoJS.CryptoJS.enc.Utf8.parse(iv),
    mode: cryptoJS.CryptoJS.mode.CBC,
    padding: cryptoJS.CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

/**
 * 解密
 */
function decryptByDES(ciphertext,key) {
  var keyHex = cryptoJS.CryptoJS.enc.Utf8.parse(key);

  var decrypted = cryptoJS.CryptoJS.TripleDES.decrypt({
    ciphertext: cryptoJS.CryptoJS.enc.Base64.parse(ciphertext)
  }, keyHex, {
      iv: cryptoJS.CryptoJS.enc.Utf8.parse(iv),
      mode: cryptoJS.CryptoJS.mode.CBC,
      padding: cryptoJS.CryptoJS.pad.Pkcs7
    });

  return decrypted.toString(cryptoJS.CryptoJS.enc.Utf8);
}


module.exports = {
  encryptByDES: encryptByDES,
  decryptByDES: decryptByDES
}  