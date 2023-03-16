import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-gray-800 border-t-2 border-gray-500 pt-5 pr-10 pl-6 min-h-screen text-white">
      <h3 className="text-lg font-bold">Popular topics</h3>
      <ul>
        <li className="my-3 py-1 hover:opacity-50 transition-all">
          <Link className="py-2 my-1" to="/t/gaming">
            Gaming
          </Link>
        </li>
        <li className="my-3 py-1 hover:opacity-50 transition-all">
          <Link className="py-2 my-1" to="/t/sports">
            Sports
          </Link>
        </li>
        <li className="my-3 py-1 hover:opacity-50 transition-all">
          <Link className="py-2 my-1" to="/t/business_economics_and_finance">
            Business
          </Link>
        </li>
        <li className="my-3 py-1 hover:opacity-50 transition-all">
          <Link className="py-2 my-1" to="/t/cryptocurrency">
            Crypto
          </Link>
        </li>
        <li className="my-3 py-1 hover:opacity-50 transition-all">
          <Link className="py-2 my-1" to="/t/television">
            Television
          </Link>
        </li>
        <li className="my-3 py-1 hover:opacity-50 transition-all">
          <Link className="py-2 my-1" to="/t/celebrity">
            Celebrity
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
