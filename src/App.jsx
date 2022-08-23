import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthernticatedApp from './components/AuthernticatedApp';
import Home from './components/Home';
import Topbar from './components/Topbar';
import UnAuthernticatedApp from './components/UnAuthernticatedApp';
import Write from './components/Write';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    setCurrentUser(true)
  }, [])

  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Routes>
        <Route path='/' element={ currentUser ?  <AuthernticatedApp currentUser={currentUser} /> : <UnAuthernticatedApp /> } />
        <Route path='/write' element={<Write />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
