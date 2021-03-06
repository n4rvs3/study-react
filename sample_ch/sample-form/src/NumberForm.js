import React, { Component } from "react";

export default class NumberForm extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    // 値が変更された時のイベント

    doChange(e) {
        const curValue = e.target.value

        const newValue = curValue.replace(/[^0-9]/g, '')
        this.setState({ value: newValue })
    }

    // 送信ボタンがクリックされた時のイベント

    doSubmit(e) {
        window.alert('値を送信: ' + this.state.value)
        e.preventDefault()
    }

    // 画面の表示部分

    render() {
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <form onSubmit={doSubmit}>
                <input type='text'
                    value={this.state.value}
                    onChange={doChange} />
                <input type='submit' value='送信' />
            </form>
        )
    }
}