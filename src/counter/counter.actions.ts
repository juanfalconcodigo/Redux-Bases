import { Action } from "../ngrx-fake/ngrx";

const incrementAction: Action = {
    type: 'INCREMENT'
};

const decrementAction: Action = {
    type: 'DECREMENT'
}

const multiplicacionAction: Action = {
    type: 'MULTIPLICATION',
    payload: 5
}

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
}

const resetAction:Action={
    type:'RESET'
}

export{
    incrementAction,
    decrementAction,
    multiplicacionAction,
    divideAction,
    resetAction
}
