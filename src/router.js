import React from "react";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem"
import SingleItem from "./pages/SingleItem";


const routes =[
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/ItemCard/:id",
    element: <SingleItem />
  }, 
  {
    path: "/AddItem",
    element: <AddItem />
  }
  ];

export default routes;