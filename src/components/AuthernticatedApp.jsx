import { FirestoreProvider } from "../contexts/FirestoreContext";
import { VolSignUpPage } from "./VolSignUpPage";

export default function AuthernticatedApp() {
  return (
    <div className="h-[calc(100vh-80px)]">
      <FirestoreProvider>
        <VolSignUpPage />
      </FirestoreProvider>
    </div>
  )
}
