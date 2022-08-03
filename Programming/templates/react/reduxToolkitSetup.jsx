// npm install @reduxjs/toolkit react-redux

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reduxSlices/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
// --------------------------------------------

import store from './store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// --------------------------------------------

import { createSlice } from '@reduxjs/toolkit'
import { func } from 'prop-types';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incByAmount } = counterSlice.actions

export default counterSlice.reducer
// ------------------------------------------

import { useDispatch } from "react-redux/es/exports"
import { decrement, increment, incByAmount } from "../../reduxSlices/counter/counterSlice"

export default function DispatchComp() {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incByAmount(5))}>incBy5</button>
    </>
  )
}
// -------------------------------------------

import { useSelector } from 'react-redux';

export default function UseStoreData() {
  const count = useSelector(state => state.counter.value)

  return (
    <p>{count}</p>
  )
}