import {

  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


import Signin from "./Component/Signin/Signin";
import Products from "./Pages/Products";
import Header from "./Component/Header.jsx/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";
import CreateProduct from "./Pages/CreateProduct";
import EditProducts from "./Pages/EditProducts";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 bg-gray-200" /> 
      <div className="flex flex-col flex-grow">
        <Header className="h-16 bg-gray-300" /> 
        <div className="flex-grow p-4 bg-gray-100">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};




const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout/>,
    children:[{
      path: "/",
      element:<Dashboard/>
    }]
  },

  {
    path: "/products",
    element: <Layout />,
    children:[{
      path: "/products",
      element:<Products/>
    }]
  },
  {
    path: "/products/addproducts",
    element:<Layout/>,
    children:[{
      path: "/products/addproducts",
      element:<CreateProduct/>
    }] 
  },
  {
    path: "/products/editproducts",
    element:<Layout/>,
    children:[{
      path: "/products/editproducts",
      element:<EditProducts/>
    }] 
  }
]);
const App = () => {
  
  return <RouterProvider router={router}/>
    

};

export default App;
