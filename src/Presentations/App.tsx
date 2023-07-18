import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const MainLayout = lazy(() => import("@/Presentations/layouts/Main.layout"));
const HomePage = lazy(() => import("@pages/index"));
const LoginPage = lazy(() => import("@pages/login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
