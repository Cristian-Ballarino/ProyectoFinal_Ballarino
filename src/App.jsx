
import './App.css'
import ItemListContainer from './pages/ItemListContainer'
import Navbar from './components/Header/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ItemDetailContainer from './pages/ItemDetailContainer'


//2.08 MINUTOS CLASE 5
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
         <Route path='/products' element={<ItemListContainer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Item:id' element={<ItemDetailContainer />} />
         <Route path="*" element={<h1>Page no found - error 404</h1>} />
      </Routes>
      {/*<ItemListContainer greeting="mi texto de bienvenida"/>*/}
    </>
  )
}

export default App
