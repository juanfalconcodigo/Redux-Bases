interface Action {
    type: string;
    payload?: any;
}

interface Reducer<T>{
    (state:T,action:Action):T
}

export{
    Action,
    Reducer
}