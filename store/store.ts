import { createStore, AnyAction, Store,Dispatch, combineReducers, applyMiddleware } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { ReactElement } from 'react';
import { StoreState } from './IStore';
import thunkMiddleware from 'redux-thunk'
import { reducerLocation } from './location';
import { reducerZone } from './zone';
import { reducerUI } from './UI';
import { reducerWeather } from './weather';

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(middleware))
    }
    return applyMiddleware(middleware)
}

const combinedReducer = combineReducers({
    zone: reducerZone,
    location: reducerLocation,
    UI: reducerUI,
    weather : reducerWeather
})

// create your reducer
const reducer = (state: any, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return { ...state, ...action.payload };
        default:
            return combinedReducer(state, action);
    }
};

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer, bindMiddleware(thunkMiddleware));

// export an assembled wrapper
export const wrapper = createWrapper<Store<StoreState>>(makeStore, { debug: true });
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof combinedReducer > & {dispatch : Dispatch}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Dispatch