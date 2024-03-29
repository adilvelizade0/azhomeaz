import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider as Router,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Loader from "./pages/Loader/Loader.page.jsx";
import ProfilePage from "./pages/Profile/Profile.page.jsx";

const Home = lazy(() => import("./pages/Home/Home.page.jsx"));
const AdsDetails = lazy(() => import("./pages/AdsDetails/AdsDetails.page.jsx"));
const SearchPage = lazy(() => import("./pages/Search/Search.page.jsx"));
const CreateAds = lazy(() => import("./pages/CreateAds/CreateAds.page.jsx"));
const Login = lazy(() => import("./pages/Login/Login.page.jsx"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn.page.jsx"));
const Test = lazy(() => import("./pages/Test/Test.page.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.page.jsx"));
const About = lazy(() => import("./pages/About/About.page.jsx"));
const Rules = lazy(() => import("./pages/Rules/Rules.page.jsx"));
const Instructions = lazy(() =>
  import("./pages/Instructions/Instructions.page.jsx")
);

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
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/rules",
        element: (
          <Suspense fallback={<Loader />}>
            <Rules />
          </Suspense>
        ),
      },
      {
        path: "/instructions",
        element: (
          <Suspense fallback={<Loader />}>
            <Instructions />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signin",
    element: (
      <Suspense fallback={<Loader />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "/test",
    element: (
      <Suspense fallback={<Loader />}>
        <Test />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router router={browserRouter} />
  </Provider>
);
