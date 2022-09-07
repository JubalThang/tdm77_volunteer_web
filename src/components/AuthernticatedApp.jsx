
import { BibleProvider } from "../contexts/BibleContext";
import Home from "./Home";
import { VolSignUpPage } from "./VolSignUpPage";

export default function AuthernticatedApp({currentUser}) {

  return (
    <div>
      <BibleProvider>
       { currentUser.books ? <Home /> : <VolSignUpPage /> }
       </BibleProvider>
    </div>
  )
}
