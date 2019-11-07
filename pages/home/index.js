// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 3,
    name:"zzy",
    age:20,
    score:45,
    inputValue:"",
    hobbys:[
      { name: "LOL"},
      { name: "Dota"},
      { name: "3C澄海"}
    ],
    ageInterval:null
  },
  goLog(){
    // wx.navigateTo({
    //   // url: '../navigate/index',
    //   url:'/pages/navigate/index'      
    // })

    // wx.switchTab({
    //   url: '/pages/index/index',
    // })

    // wx.redirectTo({
    //   url: '/pages/navigate/index',
    // })

    // wx.navigateTo({
    //   url: '/pages/logs/logs',
    // })

    wx.navigateTo({
      url: '/pages/componentpage/index',
    })

  },
  onChange(event) {
    this.setData({
      value: event.detail
    });
  },
  valueChange(e){
    // console.log(e);
    this.setData({
      inputValue:e.detail.value
    });
  },
  start(e){
    console.log("开始",e);
    console.log(`名字为：${e.target.dataset.name}`); 
    console.log(`年纪为：${e.target.dataset.age}`);
    
    this.ageInterval = setInterval(()=>{
      let newage = this.data.age + 1;
      this.setData({
        age: newage
      })
    },1000);
  },
  stop(e) {
    console.log("结束",e);
    clearInterval(this.ageInterval);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this);
    this.setData({
      age:18
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})