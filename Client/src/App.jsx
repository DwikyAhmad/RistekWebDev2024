import { Outlet } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      <div className='App'>
        <main className='formHeight'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
