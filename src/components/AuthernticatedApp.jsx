import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Write from "./Write";

export default function AuthernticatedApp() {
  return (
    <div className="w-screen">
      <Write />
    </div>
  )
}
