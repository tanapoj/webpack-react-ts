import {Reducer} from "redux"

export interface IState {
    counter: number
}

const initState = {
    counter: 0
}

const reducer: Reducer = (state: object = initState, action: object) => {

}

export default reducer