import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const HomeComp = lazy(() => import("./Home"));
const LoginComp = lazy(() => import("./Login"));
function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomeComp />} />
          <Route exact path="/login" element={<LoginComp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
