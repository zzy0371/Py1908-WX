// components/myrate/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rateNum:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    setRate(e){
      this.setData({
        rateNum: e.target.dataset.num
      });
      this.triggerEvent("rateStatus", { num: e.target.dataset.num})
    }
  }
})
