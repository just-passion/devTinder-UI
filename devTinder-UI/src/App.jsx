import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>Login Page</div>}></Route>
          <Route path="/login" element={<div>Login Page</div>}></Route>
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  );
}

export default App;
