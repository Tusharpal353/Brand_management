import { Bell, User2Icon } from "lucide-react";

const Header = () => {
  return (
    <div className="border  p-5 w-full">
      <div className=" flex justify-between">
        <input 
          type="text"
          placeholder="search something here"
          className="border rounded-lg pr-16"
        />

        <div className="flex ">
          <div className="flex">
              <Bell className="m-4" />
              <UserCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


const UserCard = ()=>{
    return(
    <div className="grid grid-flow-col ">    

        <div className="" >
            <User2Icon className="m-2"/>

        </div>
        <div className=""> 
            <h1>Arfi Ganteng</h1>
            <h1>abc@gmail.com</h1>

        </div>
    </div>
    )
}