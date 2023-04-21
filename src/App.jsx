import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Main from './component/Main'
import Menu from './pages/Menu/Menu'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
const App = () => {
  const [darkToggle, setDarkToggle] = React.useState(false)
 

  return (
    <>
    <div className={`bg-green-50 dark:bg-gray-900 min-h-screen  ${
    darkToggle && 'dark'
  }`}>
    <Router>
      <Routes>
        <Route path='' element={<Main darkToggle={darkToggle} setDarkToggle={setDarkToggle}/>}>
            <Route index element={<Home/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='blog' element={<Blog/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App