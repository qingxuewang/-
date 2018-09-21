const utilDes = require('./des.js')
const utilMd5 = require('./md5.js')
// 加密
function encrypt(message, key) {
  key = utilMd5.hexMD5(key);
  console.log(key);
  var str = utilDes.encryptByDES(message, key);
  console.log(str);
  return str;
}
// 解密
function decrypt(ciphertext,key){
  key = utilMd5.hexMD5(key);
  console.log(key);
  var str = utilDes.decryptByDES(ciphertext, key);
  console.log(str);
  return str;
}
module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
}  