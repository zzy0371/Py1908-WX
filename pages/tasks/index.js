// pages/tasks/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    taskList:[]
  },
  delTask(e){
    // console.log(e);
    let index = e.target.dataset.index;
    this.data.taskList.splice(index,1);
    wx.setStorage({
      key: "tasks",
      data: this.data.taskList
    })

    this.setData({
      taskList: this.data.taskList
    });

  },
  onConfirm(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    if (event.detail.length<=0){
      wx.showToast({
        title: '输入内容不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    else
    {
      let canAdd = true;
      this.data.taskList.forEach((item)=>{
        if(item == event.detail){
           canAdd=false; 
        }
      })
      if(canAdd){
        this.data.taskList.push(event.detail);

        wx.setStorage({
          key: "tasks",
          data: this.data.taskList
        })

        this.setData({
          taskList: this.data.taskList,
          value: ""
        });
      }
      else
      {
        wx.showToast({
          title: '项目已经存在',
          icon: 'none',
          duration: 2000
        })
      }

    }

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'tasks',
      success: (res)=> {
        console.log(res);
        this.setData({
          taskList:res.data
        })
      },
      fail:(res)=>{
        console.log(res,"++");
        this.setData({
          taskList:[]
        })
      }
    })
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
    console.log("下拉");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})