import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthMiddleware from "@/Domain/middleware/auth.middleware";
import "react-toastify/dist/ReactToastify.css";

const DefaultLayout = lazy(
  () => import("@/Presentations/layouts/Default.layout")
);
const MainLayout = lazy(() => import("@/Presentations/layouts/Main.layout"));
const HomePage = lazy(() => import("@pages/index"));
const LoginPage = lazy(() => import("@pages/login"));
const DetailAnimePage = lazy(() => import("@pages/anime/_id"));
const ProfilePage = lazy(() => import("@pages/profile"));
const LoginTokenPage = lazy(() => import("@pages/login-token"));
const CollectionsPage = lazy(() => import("@pages/collections"));

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/anime/:media_id" element={<DetailAnimePage />} />
              <Route path="/" element={<AuthMiddleware />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/collections" element={<CollectionsPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/login-token" element={<LoginTokenPage />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
