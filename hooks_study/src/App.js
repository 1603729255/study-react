import UseStateLy from './Hooks/UseStateLy'
import UseEffectLy from './Hooks/UseEffectLy'
import UseEffectLy2 from './Hooks/UseEffectLy2'
import UseEffectLy3 from './Hooks/UseEffectLy3'
import UseCallbackLy from './Hooks/UseCallbackLy'
import UseMemoLy from './Hooks/UseMemoLy'
import UseRefLy from './Hooks/UseRefLy'
import UseReducerLy from './Hooks/useReducerLy'
function App() {
  return (
    <div>
      <UseStateLy /><br/>
      <UseEffectLy /><br/>
      <UseEffectLy2 /><br/>
      <UseEffectLy3 /><br/>
      <UseCallbackLy /><br/>
      <UseMemoLy /><br/>
      <UseRefLy /><br/>
      <UseReducerLy /><br/>
    </div>
  )
}

export default App
