import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthernticatedApp from './components/AuthernticatedApp';
import { Footer } from './components/Footer';
import Home from './components/Home';
import { SignupAccount } from './components/SignupAccount';
import Topbar from './components/Topbar';
import UnAuthernticatedApp from './components/UnAuthernticatedApp';
import Write from './components/Write';
import { useAuth } from './contexts/AuthContext';

function App() {

  const { currentUser } = useAuth()

  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Routes>
        <Route path='/' element={currentUser ? <AuthernticatedApp currentUser={currentUser} /> : <UnAuthernticatedApp />} />
        <Route path='/write' element={<Write />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignupAccount />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;


// TODO::
// Show hide side bar on smaller screen 
// save button on write page will save on localStorage or push direct to firebase?
// 