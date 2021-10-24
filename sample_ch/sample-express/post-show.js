const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))

// 最新版のExpressではbodyParserが標準搭載されている模様。

app.use(express.urlencoded({
    extended: true
}))

app.listen(3000, () => {
    console.log('起動しました - http://localhsot:3000')
})

// getメソッドならformを表示
app.get('/', (req, res) => {
    res.send('<form method="POST">' +
        '<textarea name="memo">メモ</textarea>' +
        '<br /><input type="submit" value="送信">' +
        '</form>')
})

// postメソッドを待ち受ける

app.post('/', (req, res) => {
    const s = JSON.stringify(req.body)
    res.send('POSTを受信しました:' + s)
})