import { Reducer, Action } from "./ngrx-fake/ngrx";

class Store<T>{
    constructor(private reducer:Reducer<T>, private state: T) {
    }
    getState(){
        return this.state;
    }
    dispatch(action:Action){
        this.state=this.reducer(this.state,action);
    }
}

export{
    Store
}