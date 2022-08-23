import { useEffect, useState } from 'react';
import './App.css';
import AuthernticatedApp from './components/AuthernticatedApp';
import Topbar from './components/Topbar';
import UnAuthernticatedApp from './components/UnAuthernticatedApp';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    setCurrentUser(true)
  }, [])

  return (
    <div>
      <Topbar currentUser={currentUser} />
      {
        currentUser ? <AuthernticatedApp currentUser={currentUser} /> : <UnAuthernticatedApp />
      }
    </div>
  )
}

export default App;
