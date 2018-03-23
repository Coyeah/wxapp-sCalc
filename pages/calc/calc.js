// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idb: 'back',
    idc: 'clear',
    idt: 'toggle',
    idd: 'divide',
    id7: '7',
    id8: '8',
    id9: '9',
    idm: 'multiply',
    id4: '4',
    id5: '5',
    id6: '6',
    ids: 'subtract',
    id1: '1',
    id2: '2',
    id3: '3',
    ida: 'add',
    id0: '0',
    idp: 'point',
    ide: 'equal',
    waitData: '0',
    screenData: '0',
    arr: [],
    logs: [],
  },

  /**
   * 按键触发 -- event
   */
  clickBtn: function (event) {
    var id = event.target.id;
    var wait = this.data.waitData;
    var temp = this.data.screenData;
    switch (id) {
      case this.data.idb: {
        if (temp == '0' || temp.length == 1) {
          temp = '0';
        } else {
          var tmp = '';
          for (var i = 0; i < temp.length - 1; i++) {
            tmp += temp.charAt(i);
          }
          temp = tmp;
        }
        this.setData({ "screenData": temp });
        break;
      }
      case this.data.idc: {
        this.data.arr.splice(0, this.data.arr.length);
        this.data.logs.splice(0, this.data.logs.length);
        this.setData({ "screenData": "0", "waitData": "0" });
        break;
      }
      case this.data.idt: {
        break;
      }
      case this.data.idd: {
        var symbol = '/';
        if (temp == '0') {
          if (wait != '0') {
            wait = wait.substring(0, wait.length - 1) + symbol;
            this.data.logs.pop();
            this.data.logs.push(symbol);
          }
        } else {
          this.data.arr.push(temp);
          this.data.logs.push(symbol);
          if (wait == '0') {
            wait = temp + symbol;
          } else {
            wait = wait + temp + symbol;
          }
          temp = '0';
        }
        this.setData({ "screenData": temp, "waitData": wait });
        break;
      }
      case this.data.idm: {
        var symbol = '*';
        if (temp == '0') {
          if (wait != '0') {
            wait = wait.substring(0, wait.length - 1) + symbol;
            this.data.logs.pop();
            this.data.logs.push(symbol);
          }
        } else {
          this.data.arr.push(temp);
          this.data.logs.push(symbol);
          if (wait == '0') {
            wait = temp + symbol;
          } else {
            wait = wait + temp + symbol;
          }
          temp = '0';
        }
        this.setData({ "screenData": temp, "waitData": wait });
        break;
      }
      case this.data.ids: {
        var symbol = '-';
        if (temp == '0') {
          if (wait != '0') {
            wait = wait.substring(0, wait.length - 1) + symbol;
            this.data.logs.pop();
            this.data.logs.push(symbol);
          }
        } else {
          this.data.arr.push(temp);
          this.data.logs.push(symbol);
          if (wait == '0') {
            wait = temp + symbol;
          } else {
            wait = wait + temp + symbol;
          }
          temp = '0';
        }
        this.setData({ "screenData": temp, "waitData": wait });
        break;
      }
      case this.data.ida: {
        var symbol = '+';
        if (temp == '0') {
          if (wait != '0') {
            wait = wait.substring(0, wait.length - 1) + symbol;
            this.data.logs.pop();
            this.data.logs.push(symbol);
          }
        } else {
          this.data.arr.push(temp);
          this.data.logs.push(symbol);
          if (wait == '0') {
            wait = temp + symbol;
          } else {
            wait = wait + temp + symbol;
          }
          temp = '0';
        }
        this.setData({ "screenData": temp, "waitData": wait });
        break;
      }
      case this.data.idp: {
        for (var i = 0; i < temp.length; i++) {
          if (temp.charAt(i) == '.') {
            break;
          }
          if (i == temp.length - 1) {
            temp += '.';
          }
        }
        this.setData({ "screenData": temp });
        break;
      }
      case this.data.ide: {
        if (temp != '0') {
          this.data.arr.push(temp);
        }
        var sum = 0;
        for (var i = 0; i < this.data.arr.length; i++) {
          var target = parseFloat(this.data.arr[i]);
          if (i == 0) {
            sum = target;
          } else {
            var symbol = this.data.logs[i - 1];
            if (symbol == '+') {
              sum = sum + target;
            } else if (symbol == '-') {
              sum = sum - target;
            } else if (symbol == '*') {
              sum = sum * target;
            } else if (symbol == '/') {
              sum = sum / target;
            }
          }
        }
        var total = sum + '';
        this.setData({ "screenData": total, "waitData": "0" });
        this.data.arr.splice(0, this.data.arr.length);
        this.data.logs.splice(0, this.data.logs.length);
        break;
      }
      default: {
        temp += id;
        if (temp.charAt(0) == '0' && temp.charAt(1) != '.') {
          temp = temp.substring(1);
        }
        this.setData({ "screenData": temp });
        break;
      }
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