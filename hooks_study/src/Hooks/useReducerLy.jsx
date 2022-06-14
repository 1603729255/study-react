import React, { useReducer, useContext } from 'react'

const reducer = (preState, action) => {
  let newState = { ...preState }
  console.log(preState, action)
  switch (action.type) {
    case 'jian':
      newState.count--
      return newState
    case 'jia':
      newState.count++
      return newState
    case 'changeA':
      newState.a = action.value
      return newState

    case 'changeB':
      newState.b = action.value
      return newState
    default:
      return preState
  }
}

const intiaState = {
  count: 0,
  a: 'aaaa',
  b: 'bbbb'
}

const GlobalContext = React.createContext()
export default function useReducerLy() {
  const [state, dispatch] = useReducer(reducer, intiaState)

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'jian'
          })
        }}>
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: 'jia'
          })
        }}>
        +
      </button>

      {/*  */}
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Child1 />
        <Child2 />
        <Child3 />
      </GlobalContext.Provider>
    </div>
  )
}

function Child1() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'changeA',
            value: '1111'
          })
        }}>
        改变a
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'changeB',
            value: '2222'
          })
        }}>
        改变b
      </button>
    </div>
  )
}
function Child2() {
  const { state } = useContext(GlobalContext)

  return <div>Child2{state.a}</div>
}
function Child3() {
  const { state } = useContext(GlobalContext)

  return <div>Child3{state.b}</div>
}
