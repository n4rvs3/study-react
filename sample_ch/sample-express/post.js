const express = require('express')
const app = express()
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
    res.send('POSTされました')
})