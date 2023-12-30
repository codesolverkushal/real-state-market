import {FaSearch} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
  const {user} = useSelector((store) => store.user);
 

  return (
    <header className="bg-slate-200 shadow-md ">
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-md sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Kushal</span>
            <span className='text-slate-700'>State</span>
        </h1>
        

        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='search...'
            className='bg-transparent border focus:outline-none border-none w-24 sm:w-64' />
            <FaSearch className="text-slate-600"/>
        </form>

        <ul className="flex gap-4">
            <Link to="/">
                <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
            </Link>
            <Link to="/about">
                <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
            </Link>
            <Link to="/profile">
            {user?.currentUser ? (
               <img className="rounded-full h-7 w-7 object-cover" src={user?.currentUser?.avatar} alt="profile" />
            ) :
            (
              <li className="hidden sm:inline text-slate-700 hover:underline">Sign In</li>
            )
            } 
           
            </Link>
            
        </ul>
       </div>
    </header>
  )
}

export default Header