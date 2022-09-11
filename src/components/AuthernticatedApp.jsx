
import { useAuth } from "../contexts/AuthContext";
import { BibleProvider } from "../contexts/BibleContext";
import Home from "./Home";
import { VolSignUpPage } from "./VolSignUpPage";

export default function AuthernticatedApp() {

  const { currentUser } = useAuth()
  
  return (
    <div>
      <BibleProvider>
       { currentUser.books ? <Home /> : <VolSignUpPage /> }
       </BibleProvider>
    </div>
  )
}
