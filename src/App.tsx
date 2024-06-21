import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './views/Home/Home'
import DrugsInfo from './views/DrugsInfo/DrugsInfo'
import Undefined from './views/Undefined/Undefined'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/drug/:id" element={<DrugsInfo/>}/>
          <Route path="*" element={<Undefined/>}/>
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
