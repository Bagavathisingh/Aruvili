import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import HomeLayout from './HomeComponents/layout'
import Content from './HomeComponents/Content'
import MainPageContent from './MainPages/MainPageContent'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeLayout/>} >
      <Route index element={<Content/>} />
      <Route path='/services'element={<MainPageContent/>}/>
      <Route path='/
      
      .'/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

