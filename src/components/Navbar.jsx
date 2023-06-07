import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserIcon from "../assets/user1.svg"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between font-poppins px-32 pt-4 absolute top-0 w-full">
      <Link className="font-bold text-2xl" to='/'>
        <span className="text-textblack">Desti</span>
        <span className="text-pink1">Match</span>
      </Link>

      <div className="flex gap-[52px]">
        <Link className="font-semibold text-lg" to ='/'>Beranda</Link>
        <button className="font-semibold text-lg">Riwayat</button>
        <Link className="font-semibold text-lg" to='/'>Tentang</Link>
      </div>

      <Link className="h-8 w-8 pt mr-2" to='/profile'>
        <img src={UserIcon} alt="profile" />
      </Link>
    </div>
  );
};
