import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import GenerateAI from "./pages/GenerateAI";
import MainLayout from "./layouts/MainLayout";

const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route
            path="/favorites"
            element={
              <Suspense fallback="Loading ....">
                <FavoritesPage />
              </Suspense>
            }
          />
          <Route path="/generate" element={<GenerateAI />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
