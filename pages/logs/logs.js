//logs.js
const util = require('../../utils/util.js')
const secret = require('../../utils/secret.js')
Page({
  data: {
    logs: [],
    content:'[{"id":"1","name":"冯威3","pinyin":"FENGWEI","pyFirst":"F","pyFirstLetter":"FW","tel1":"123456"},{"id":"2","name":"a","pinyin":"a","pyFirst":"A","pyFirstLetter":"A","tel1":"12221234"},{"id":"3","name":"12","pinyin":"12","pyFirst":"1","pyFirstLetter":"12","tel1":"14441123411","tel2":"13334512122"},{"id":"31","name":"w ","pinyin":"w ","pyFirst":"W","pyFirstLetter":"W ","tel1":"15814465555"},{"name":"12","tel1":"12345678901","pyFirst":"1","pyFirstLetter":"12","pinyin":"12","id":"311"}]'
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function() {
    console.log(this.data.content)
    var a = secret.encrypt(this.data.content,'18980592313')
    var b = secret.decrypt(a,'18980592313')
  }
})