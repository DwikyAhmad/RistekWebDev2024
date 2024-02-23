import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/NavBar';
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <div className='App'>
        <main className='formHeight'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
