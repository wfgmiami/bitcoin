const express = require('express');
const app = express();

const BTCE = require('./btce.js')

const btce = new BTCE('DQGR1EU2-S1UK2OZJ-GWJ830EG-PAQ95V77-YVGT33WC', 'cf8de8f52810eb6fa325c1d3e7797f4c97729834592afedf01611e99d451c5b1')

app.use('/public', express.static(__dirname + '/public'))
app.use('/vendors', express.static(__dirname + '/node_modules'))

app.get('/', (req,res,next)=>{
  res.sendFile(__dirname + '/index.html');
})

app.get('/ticker', (req,res,next)=>{
  btce.ticker({ pair: `${req.query.pair}`}, (err, data)=>{
    if(!err){
      res.send(data)
    }else{
      next
    }
  })
})

app.use((err,req,res,next)=>{
  req.sendStatus(500).send(err.message)
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening on port ${port}`))
