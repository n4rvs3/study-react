const express = require('express')
const app = express()
const portNo = 3000

// アクセスがあった時の処理

app.get('/', (req, res, next) => {
    res.send('hello world')
})

// サーバーの起動処理

app.listen(portNo, () => {
    console.log('サーバーが起動しました', `http://localhost:${portNo}`)
})