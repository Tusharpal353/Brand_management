import {
  ChartNoAxesColumnIncreasing,
  LogOut,
  Mail,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  SquareStack,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="border ">
      <div className="w-64 h-screen">
        <h1 className="font-bold text-3xl p-8 flex justify-center">tuks</h1>
        <ul className="border flex flex-col gap-3 p-3 text-gray-500 cursor-pointer">
          <h1 className=" text-xs ">MENU</h1>
          <Link to="/">
          <li className="flex items-center space-x-2  p-2 hover:bg-blue-600 rounded-xl hover:text-white">
            <ChartNoAxesColumnIncreasing className="w-5 h-5" />
            <span>Dashboard</span>
          </li>
          </Link>
          <Link to="/products">
            <li className="flex items-center  space-x-2 p-3 hover:bg-blue-600 rounded-xl hover:text-white">
              <Package />
              <span>Products</span>
            </li>
          </Link>
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded-xl hover:text-white">
            <User />
            <span>Customer</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded-xl hover:text-white">
            <SquareStack />
            <span>Categorey</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded-xl hover:text-white">
            <ShoppingCart />
            <span>orders</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded-xl hover:text-white">
            <ShoppingBag />
            <span>Coupns</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded-xl hover:text-white">
            <Mail />
            <span>Chats</span>
          </li>
        </ul>
        <ul className="border flex flex-col gap-3 p-3 text-gray-500 cursor-pointer">
          <h1 className="text-gray-400 text-xs">OTHER</h1>
          <li className="flex items-center space-x-2  p-2 hover:bg-blue-600 rounded-xl hover:text-white">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </li>
          <li className="flex items-center  space-x-2 p-3 hover:bg-blue-600 rounded-xl hover:text-white">
            <LogOut />
            <span>Logout</span>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
