import { incrementAction, decrementAction, multiplicacionAction, divideAction, resetAction } from "./counter/counter.actions";
import { Store as StoreMe } from "./app";
import { reducer } from "./counter/counter.reducer";
import {createStore,Store} from 'redux';

console.log("<<<<<<<<<<<<<<<<<<<<<<<Without Redux>>>>>>>>>>>>>>>>>>>>>>>");
const storeMe=new StoreMe(reducer,10);


storeMe.dispatch(incrementAction);
console.log(storeMe.getState());


storeMe.dispatch(decrementAction);
console.log(storeMe.getState());


storeMe.dispatch(multiplicacionAction);
console.log(storeMe.getState());


storeMe.dispatch(divideAction);
console.log(storeMe.getState());


storeMe.dispatch(resetAction);
console.log(storeMe.getState());
console.log("<<<<<<<<<<<<<<<<<<<<<<<With Redux>>>>>>>>>>>>>>>>>>>>>>>");


// esta implementación es realizada con redux

const store:Store=createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(multiplicacionAction);
store.dispatch(divideAction);
store.dispatch(resetAction);




