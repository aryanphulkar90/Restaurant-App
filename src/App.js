import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {useContext, useState, useEffect} from "react"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  const [userName, setUserName] = useState("default")
  useEffect(() => {
    const data = {
      name: "Aryan NP"
    }
    setUserName(data.name)
  }, [])
  
  return (
    <Provider store={appStore}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
        <Header/>
        <Outlet/>
        </UserContext.Provider>
      </div>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
     path:"/",
     element: <AppLayout/>,
     children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element:(
        <Suspense fallback={<h3>Loading....</h3>}>
          <Grocery/>
        </Suspense>
        )
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)