import React,{ useState ,useEffect} from 'react'

export default function UseEffectLy2() {
  const [name,setName]=useState('lycan')
  useEffect(()=>{
    setName(name.substring(0,1).toUpperCase()+name.substring(1))
  },[name])

  //  第一次执行一次。依赖（name）更新,会导致useEffect再次执行 。  
  return (
    <div>
      "UseEffectLy2"-{name}
      <button onClick={()=>{
        setName("xiaoming")
      }}>click</button>
    </div>
  )
}
