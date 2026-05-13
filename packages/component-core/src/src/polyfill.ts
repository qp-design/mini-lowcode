// utils/crypto-polyfill.js
export function initCryptoPolyfill() {
  if (typeof global === 'undefined') {
    global = {};
  }

  if (typeof crypto === 'undefined') {
    // 微信小程序环境
    const getRandomValues = function (array) {
      // 使用微信小程序的随机数生成
      for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    };

    global.crypto = {
      getRandomValues,
      randomUUID: function () {
        // 生成符合 UUID v4 格式的字符串
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = (Math.random() * 16) | 0;
          const v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      },
      subtle: {}
    };
  }
}
