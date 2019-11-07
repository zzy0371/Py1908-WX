// components/myheart/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    like:true,
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeLike() {
      this.setData({
        like:!this.data.like
      });
      this.triggerEvent("likeStatus",{state:this.data.like });
    },
  }
})
