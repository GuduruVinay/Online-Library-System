import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './redux/store.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap App with the Provider component */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
