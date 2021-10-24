import {appDispatcher} from './appDispatcher.js'
import {ActionType} from './actions.js'

// storeを用意
export const nameStore = {name: '', onChange: null}
export const messageStore = {message: '', onChange:null}

// ActionとStoreを関連付ける
appDispatcher.register(payload => {
    if(payload.actionType === ActionType.CHANGE_NAME) {
        nameStore.name = payload.value
        nameStore.onChange()
    }
})

appDispatcher.register(payload => {
    if (payload.actionType === ActionType.SUBMIT_NAME) {
        messageStore.message = nameStore.name + 'さん、こんにちは'
        messageStore.onChange()
    }
})