import React, { useState } from 'react'

export default function useStateLy() {
  
  const [name,setName]=useState('ly')
  const [age,setAge]=useState('18')
  const [text,setText]=useState("")
  const handleChange=(evt)=>{
    setText(evt.target.value)
    console.log(text);
  }
  return (
    <div>
      "useStateLy"
      <button onClick={
        ()=>{
          setName('jw')
          setAge(20)        }
      }>click</button>
      {name}-{age}

      <input type="text" onChange={handleChange}/>
      {text}
      {/* 不是this.handleChange 函数内部调用*/}
    </div>
  )
}
