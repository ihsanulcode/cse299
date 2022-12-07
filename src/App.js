import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Home from "./Pages/Home/Home";
import ProductExtendedView from "./Pages/ProductExtendedView/ProductExtendedView";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Cart from "./Pages/Cart/Cart";
import UserControlLayout from "./layouts/UserControlLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Registration></Registration>,
        },
        {
          path: "/productExtendedView/:id",
          loader: ({ params }) =>
            fetch(`https://machbazar-server.vercel.app/fishCard/${params.id}`),
          element: <ProductExtendedView></ProductExtendedView>,
        },
        {
          path: `/categories/:id`,
          element: <SearchResult></SearchResult>,
          loader: ({ params }) =>
            fetch(
              `https://machbazar-server.vercel.app/categories/${params.id}`
            ),
        },
        {
          path: "/cart/:uid",
          element: <Cart></Cart>,
          loader: ({ params }) =>
            fetch(`https://machbazar-server.vercel.app/cart/${params.uid}`),
        },
      ],
    },
    {
      path: "/userControls",
      element: <UserControlLayout></UserControlLayout>,
      // children: [
      //   {
      //     path: "/account",
      //     element: <MyAccount></MyAccount>,
      //   },
      // ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
