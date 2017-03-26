var BTCE = require('./btce.js')

var btce = new BTCE('DQGR1EU2-S1UK2OZJ-GWJ830EG-PAQ95V77-YVGT33WC', 'cf8de8f52810eb6fa325c1d3e7797f4c97729834592afedf01611e99d451c5b1')

btce.getInfo(function(err, data) {
  console.log('\nGet Info: ')
  if (!err) console.log(data)
  else console.log(err)
})

btce.ticker({ pair: 'btc_usd' }, function(err, data) {
  console.log('\nTicker: ')
  if (!err) console.log(data)
  else console.log(err)
})

