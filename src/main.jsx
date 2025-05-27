import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../app.css'  // ✅ 루트 기준으로 import!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
