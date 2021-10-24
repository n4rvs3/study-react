const express = require('express')
const app = express()
const portNo = 3000

// URLのルーティング
app.get('/', (req, res) => {
    // rootの後にqueryがない場合以下処理
    // 例：localhost:3000 のみ
    if (!req.query.q) {
        res.send(
            '<p><a href="?q=6">6面体のサイコロ</a><br />' +
            '<a href="?q=12">12面体のサイコロ</a></p>'
        )
    } else {
        // queryがあった場合
        // 例：localhost:3000/q=
        const q = parseInt(req.query.q, 10)
        res.send(
            `<p>${q}面サイコロを振ったよ！<br />` +
            '値は...' + dice(q) + '!'
        )
    }
})

// サイコロの目を定義

function dice(n) {
    return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
    console.log('起動しました', `http:localhost:${portNo}`)
})