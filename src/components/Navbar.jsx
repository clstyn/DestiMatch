import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserIcon from "../assets/user1.svg"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-7 font-poppins px-32 py-8 absolute top-0 w-full">
      <button className="font-bold text-[28px]">
        <span className="text-textblack">Desti</span>
        <span className="text-pink1">Match</span>
      </button>

      <div className="flex gap-[52px]">
        <button className="font-semibold text-[24px]">Beranda</button>
        <button className="font-semibold text-[24px]">Riwayat</button>
        <button className="font-semibold text-[24px]">Tentang</button>
      </div>

      <button className="h-[50px] w-[50px] p-1 mr-2">
        <img src={UserIcon} alt="profile" />
      </button>
    </div>
  );
};
