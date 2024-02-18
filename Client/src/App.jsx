import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import NavBar from './components/NavBar';

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
