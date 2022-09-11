
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthernticatedApp from './components/AuthernticatedApp';
import { Footer } from './components/Footer';
import Home from './components/Home';
import { SignupAccount } from './components/SignupAccount';
import Topbar from './components/Topbar';
import UnAuthernticatedApp from './components/UnAuthernticatedApp';
import { useAuth } from './contexts/AuthContext';

function App() {

  const { currentUser } = useAuth()
  
  return (
    <div className='flex flex-col justify-between h-[calc(100vh-80px)] font-figfree'>
      <Topbar currentUser={currentUser} />
      <div className='flex-1 overflow-auto'>
        <Routes>
          <Route path='/' element={currentUser ? <AuthernticatedApp /> : <UnAuthernticatedApp />  } />
          {/* <Route path='/' element={currentUser ? <VolSignUpPage /> : <UnAuthernticatedApp />} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignupAccount />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;


// TODO::
// Show hide side bar on smaller screen 
// save button on write page will save on localStorage or push direct to firebase?
// 