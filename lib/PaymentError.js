/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 2017/3/17
 */

'use strict';

/**
 * 支付错误
 * @param channel
 * @param message
 * @param code
 * @constructor
 */
function PaymentError(channel, message, code) {
  this.message = message;
  this.channel = channel;
  this.code = code;
  this.name = 'PaymentError';
}

PaymentError.prototype = new Error();
PaymentError.prototype.constructor = PaymentError;

module.exports = PaymentError;
