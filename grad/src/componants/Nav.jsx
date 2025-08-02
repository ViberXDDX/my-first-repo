import { Link } from 'react-router-dom';
import React from "react";

const Nav = () => {
    return (
        <nav className="w-full bg-[#fdf6ee] py-4 px-8 flex justify-between items-center shadow-sm rounded-t-xl">
            <div className="flex space-x-6 text-xs font-semibold text-gray-800 tracking-wide uppercase">
                <Link to="/Resturants" className="hover:text-amber-600">Restaurants</Link>
                <Link to="/OtherProjects" className="hover:text-amber-600">Other small projects</Link>
            </div>
            <button className="bg-orange-300 hover:bg-orange-400 text-xs font-bold text-gray-800 px-4 py-2 rounded-md border border-gray-400 shadow-sm transition">
                ORDER ONLINE
            </button>
        </nav>
    );
}

export default Nav;
