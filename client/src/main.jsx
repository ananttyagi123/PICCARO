import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import WebFont from 'webfontloader'
// import { useEffect } from 'react'
// useEffect(() => {
//   WebFont.load({
//     google: {
//       families: ['Droid Sans', 'Chilanka']
//     }
//   });
//  }, []);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
