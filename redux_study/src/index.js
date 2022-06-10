import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'//批量加入store
import App from './App'
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
