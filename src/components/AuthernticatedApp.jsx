import { FirestoreProvider } from "../contexts/FirestoreContext";
import Home from "./Home";
import { VolSignUpPage } from "./VolSignUpPage";

export default function AuthernticatedApp({currentUser}) {


  console.log(currentUser)
  return (
    <div className="h-[calc(100vh-80px)]">
      <FirestoreProvider>
       { currentUser.books !== '' ? <Home /> : <VolSignUpPage /> }
      </FirestoreProvider>
    </div>
  )
}
