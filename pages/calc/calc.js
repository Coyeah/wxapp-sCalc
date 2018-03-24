// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idb: 'back',
    idc: 'clear',
    idt: 'toggle',
    idd: 'div',
    id7: '7',
    id8: '8',
    id9: '9',
    idm: 'mul',
    id4: '4',
    id5: '5',
    id6: '6',
    ids: 'sub',
    id1: '1',
    id2: '2',
    id3: '3',
    ida: 'add',
    id0: '0',
    idp: 'point',
    ide: 'equal',
    waitData: '0',
    screenData: '0',
    oper: ["+", "-", "×", "÷"],
    arr: [],
    logs: [],
  },

  /**
   * 按键触发 -- event
   */
  clickBtn: function (event) {
    var id = event.target.id;
    var wait = this.data.waitData;
    var main = this.data.screenData;
    if (isNaN(id)) {
      if (id == this.data.idc) {
        this.data.arr.splice(0, this.data.arr.length);
        this.data.logs.splice(0, this.data.logs.length);
        this.setData({ "screenData": "0", "waitData": "0" });
      } else if (id == this.data.idb) {
        if (main != '0') {
          main = main.substring(0, main.length - 1);
          if (main == '' || main == '-') {
            main = "0";
          }
          this.setData({ "screenData": main });
        }
      } else if (id == this.data.idt) {
        if (main.charAt(0) == '-') {
          main = main.substring(1);
        } else {
          main = '-' + main;
        }
        this.setData({ "screenData": main });
      } else if (id == this.data.idp) {
        if (main.indexOf('.') < 0) {
          this.setData({ "screenData": main + "." });
        }
      } else if (id == this.data.ide) {
        this.data.arr.push(main);
        var sum = 0;
        for (var i = 0; i < this.data.arr.length; i++) {
          if (i == 0) {
            sum = parseFloat(this.data.arr[0]);
          } else {
            if (this.data.logs[i - 1] == this.data.oper[0]) {
              sum = sum + parseFloat(this.data.arr[i]);
            } else if (this.data.logs[i - 1] == this.data.oper[1]) {
              sum = sum - parseFloat(this.data.arr[i]);
            } else if (this.data.logs[i - 1] == this.data.oper[2]) {
              sum = sum * parseFloat(this.data.arr[i]);
            } else if (this.data.logs[i - 1] == this.data.oper[3]) {
              sum = sum / parseFloat(this.data.arr[i]);
            }
          }
        }
        this.data.arr.splice(0, this.data.arr.length);
        this.data.logs.splice(0, this.data.logs.length);
        this.setData({ "screenData": sum + "", "waitData": "0" });
      } else {
        var oper = '';
        if (id == this.data.idd) {
          oper = this.data.oper[3];
        } else if (id == this.data.idm) {
          oper = this.data.oper[2];
        } else if (id == this.data.ids) {
          oper = this.data.oper[1];
        } else if (id == this.data.ida) {
          oper = this.data.oper[0];
        }
        if (main == '0' || main == '-0') {
          if (wait != '0') {
            wait = wait.substring(0, wait.length - 1) + oper;
            this.data.logs.pop();
            this.data.logs.push(oper);
          }
        } else {
          if (wait == '0') {
            wait = main + oper;
          } else {
            wait = wait + main + oper;
          }
          this.data.arr.push(main);
          this.data.logs.push(oper);
        }
        this.setData({ "screenData": "0", "waitData": wait });
      }
    } else {
      if (main == '0') {
        main = id;
      } else if (main.charAt(0) == '-' && main.charAt(1) == '0') {
        main = '-' + main.substring(2) + id;;
      } else {
        main = main + id;
      }
      this.setData({ "screenData": main });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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