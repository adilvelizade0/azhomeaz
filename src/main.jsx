import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider as Router,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Loader from "./pages/Loader/Loader.page.jsx";

const Home = lazy(() => import("./pages/Home/Home.page.jsx"));
const AdsDetails = lazy(() => import("./pages/AdsDetails/AdsDetails.page.jsx"));
const SearchPage = lazy(() => import("./pages/Search/Search.page.jsx"));
const CreateAds = lazy(() => import("./pages/CreateAds/CreateAds.page.jsx"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/ads/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <AdsDetails />
          </Suspense>
        ),
      },
      {
        path: "/search/:searchTerm",
        element: (
          <Suspense fallback={<Loader />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<Loader />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/create",
        element: (
          <Suspense fallback={<Loader />}>
            <CreateAds />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router router={browserRouter} />
);
