import React, { Component } from 'react'
import './App.css'
import request from 'superagent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: null
    }
  }
  componentWillMount() {
    // JSON 取得
    request.get('./fruits.json')
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
      })
  }

  // データを読み込んだ時の処理
  loadedJSON(err, res) {
    if (err) {
      console.log('jsonが読み込めませんでした')
      return
    }
    // 状態を更新
    this.setState({
      items: res.body
    })
  }

  render() {
    // jsonの読み込みが完了しているかを確認
    if (!this.state.items) {
      return <div className='App'>
        現在読み込み中です
      </div>
    }

    // jsonから読み込んだデータからselectを作成する
    const options = this.state.items.map(e => {
      return <option value={e.price} key={e.name}>
        {e.name}
      </option>
    })
    return (
      <div className='App'>
        果物: <select>{options}</select>
      </div>
    )
  }
}

export default App