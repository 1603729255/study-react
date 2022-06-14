import React, { useRef,useState } from 'react'

export default function UseRef() {
  const myText = useRef()
  const [count, setCount] = useState(0)
  let mycount = useRef(0)//闭包保存变量 所以更新不会丢失
  const [text,setText]=useState("")
  const handleChange = evt => {
    setText(evt.target.value)
    console.log(text)
  }

  const add = () => {
    setCount(count + 1)
    mycount.current++
  }
  return (
    <div>
      UseRef{count}-{mycount.current}
      <button onClick={add}>add</button>
      <input ref={myText} type="text" onChange={handleChange} />
      {text}
    </div>
  )
}
