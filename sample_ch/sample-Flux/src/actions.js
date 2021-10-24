import { appDispatcher } from "./appDispatcher"

const nameStore = { name: '', onChange: null }
const messageStore = { message: '', onChange: null }

const ActionType = {
    CHANGE_NAME: 'CHANGE_NAME',
    SUBMIT_NAME: 'SUBMIT_NAME'
}

// Actionの生成
export const Actions = {
    changeName: (name) => {
        if (name === null) return
        appDispatcher.dispatch({
            actionType: ActionType.CHANGE_NAME,
            value: name
        })
    },
    submitName: () => {
        appDispatcher.dispatch({
            actionType: ActionType.SUBMIT_NAME
        })
    }
}