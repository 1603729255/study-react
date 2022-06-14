import React, { useState ,useEffect} from 'react'
import axios from 'axios'

export default function UseEffectLy() {
  // axios请求会被执行n次
  const [list, setList] = useState([])
  // axios.get('/text.json').then(res => {
  //   setList(res.data.data)//每次setList都会执行这个函数来更新dom，所以会一直执行
  // })

  useEffect(()=>{
    axios.get('/text.json').then(res => {
      setList(res.data.data)
    })
  },[])//传空数组，只执行一次（表示不依赖）
  return (
    <div>
      "UseEffectLy"
      {list.map(e => {
        return <span key={e.id}>{e.name}</span>
      })}
    </div>
  )
}
