import React, { useState, useCallback,useMemo } from 'react'

export default function UseCallbackLy() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  let mycount = 0

  const add = () => {
    setCount(count + 1)
    mycount++
  }
  // useState可以缓存count ，每次更新重新渲染。mycount都被赋值为0 count不会。

  // useCallback就是用来缓存方法的

  // const handleChange = useCallback(evt => {
  //   setText(evt.target.value)
  //   console.log(text)
  // },[text])

  const handleChange = useMemo(()=>evt => {
    setText(evt.target.value)
    console.log(text)
  },[text])

  return (
    <div>
      UseCallbackLy-{count}-{mycount}
      <button onClick={add}>add</button>
      <input type="text" onChange={handleChange} />
      {text}
    </div>
  )
}
