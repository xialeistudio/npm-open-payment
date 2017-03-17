/**
 * @author xialeistduio<xialeistudio@gmail.com>
 * @date 2017/3/17
 */

'use strict';

const assert = require('assert');
const PaymentError = require('../lib/PaymentError');

describe('test lib/PaymentError.js', () => {
  it('PaymentEror should instance of Error', () => {
    const error = new PaymentError('wechat', '测试');
    assert(error instanceof Error);
  });
});
