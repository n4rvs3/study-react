const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')

// ファイルを何処にアップロードするかを指定
const tmpdir = path.join(__dirname, 'tmp')
const pubdir = path.join(__dirname, 'pub')
const uploader = multer({ dest: tmpdir })

app.listen(3000, () => {
    console.log('起動しました - http:localhost:3000')
})

app.get('/', (req, res) => {
    res.send(
        '<form method="POST" action="/" enctype="multipart/form-data">' +
        '<input type="file" name="aFile" /><br />' +
        '<input type="submit" value="アップロード" />' +
        '</form>')
})

// 静的ファイルは自動的に返す
app.use('/pub', express.static(pubdir))
// アップロードを受け付ける
app.post('/', uploader.single('aFile'), (req, res) => {
    console.log('ファイルを受付ました')
    console.log('ファイル名:', req.file.originalname)
    console.log('保存したパス:', req.file.path)
    // MIMEでファイル形式のチェック
    if (req.file.mimetype !== 'image/png') {
        res.send('PNG画像以外はアップロードしません')
        return
    }

    // ここで本当にPNGかチェックする
    // ファイルを移動する
    const fname = req.file.filename + '.png'
    const des = pubdir + '/' + fname
    const fs = require('fs')
    fs.rename(req.file.path, des, function (err, result) {
        if (err) console.log('error', err);
    });
    // html出力
    res.send('ファイルを受信しました。<br />' +
        `<img src="/pub/${fname}" />`)
})
