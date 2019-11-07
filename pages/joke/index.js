// pages/joke/index.js
import {
  joke
} from './data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    jokes: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getJokes();
  },
  getJokes() {
    let that = this;
    wx.request({
      url: `http://biger.applinzi.com/duan/list.php?page=${this.data.page}`, //仅为示例，并非真实的接口地址
      success(res) {
        that.data.jokes = that.data.jokes.concat(res.data.result);

        // console.log(res.data.result)
        that.setData({
          jokes: that.data.jokes,
          page: ++that.data.page
        })

      },
      fail(err){
        wx.showToast({
          title:"网络连接失败"
        })
      }
    })

    // this.data.jokes = this.data.jokes.concat(joke.result);
    // this.setData({
    //   jokes: this.data.jokes,
    //   page: that.data.page++
    // })


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.getJokes();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})