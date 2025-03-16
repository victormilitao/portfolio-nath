import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Router } from './router'
import ScrollToTop from './components/scroll-to-top'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  )
}

export default App
