import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const navItems = (
        <>
            <li>
                <NavLink to="/"  className={({isActive})=>isActive ? "text-white text-xl font-semibold" : "text-purple-600 text-lg font-semibold" } >Home</NavLink>
            </li>
            <li>
                <NavLink to="/blogs" className={({isActive})=>isActive ? "text-white text-lg font-semibold" : "text-purple-600 text-xl font-semibold" }>Blogs</NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className=" navbar  max-w-screen-xl rounded-md text-white bg-black px-4">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-gray-600  dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case w-20 h-20 text-xl" >
                        <img src="https://i.ibb.co/yFWWZBL/logo.png" alt="" />
                       
                    </Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="flex gap-5 px-1 ">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <NavLink onClick={handleLogOut} className={"bg-purple-600 px-5 py-2 rounded-md"} to="/">LogOut</NavLink> :
                            <NavLink className={"bg-purple-600 px-5 py-2 rounded-md"} to="/login">Login</NavLink>
                    }
                    <label className="btn btn-ghost btn-circle avatar">
                        {user && (
                            <div className="w-24 rounded-full ml-4">
                                <img src={user.photoURL} title={user.displayName} />
                                <h2 className={`hover:${user.email}`}>
                                    {user.email}
                                </h2>
                            </div>
                        )}
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;