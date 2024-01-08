import { useEffect, useState } from "react";
import {FaSearch} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";


const Header = () => {
  const {user} = useSelector((store) => store.user);

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
 

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-slate-600 t shadow-md">
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       <Link to={"/"}>
       <h1 className='font-bold text-xl flex flex-wrap'>
            <span className='text-slate-100'>K</span>
            <span className='text-slate-200'>P</span>
        </h1>
        </Link>
        

        <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='search...'
            className='bg-transparent border focus:outline-none border-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         <button>
             <FaSearch className="text-slate-700"/>
         </button>
            
        </form>

        <ul className="flex gap-4">
            <Link to="/">
                <li className="hidden sm:inline text-slate-100 font-bold text-xl hover:underline">Home</li>
            </Link>
            <Link to="/about">
                <li className="hidden sm:inline text-slate-100 font-bold text-xl hover:underline">About</li>
            </Link>
            <Link to="/profile">
            {user?.currentUser ? (
               <img className="rounded-full h-7 w-7 object-cover" src={user?.currentUser?.avatar} alt="profile" />
            ) :
            (
              <li className="text-slate-100 font-bold text-xl hover:underline">Sign In</li>
            )
            } 
           
            </Link>
            
        </ul>
       </div>
    </header>
  )
}

export default Header