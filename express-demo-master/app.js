const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('袁梦')
  res.send('3117370051')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})