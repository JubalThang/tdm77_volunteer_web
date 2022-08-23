import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function AuthernticatedApp() {
  return (
    <div className="w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
