import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "../assets/Saly-22.png";
import SearchIcon from "../assets/search.svg";


export const Home1 = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-white2 ">
        <div className="flex max-w-[1200px]">
            <div className="w-[544px] mr-[132px] flex flex-col">
                <p className="text-[108px] font-semibold font-poppins">Explore Beautiful Indonesia</p>
                <div className="rounded-[20px] bg-white shadow-home flex justify-between">
                    <div className="px-4 py-8 h-full ml-4">
                        <label className="font-poppins text-2xl">Lokasi Kamu</label>
                        <select name="city" id="city" className="text-2xl font-poppins text-pink1 font-bold">
                            <option value="bandung">Bandung</option>
                        </select>
                    </div>
                    <div className="py-2">                        
                        <hr vertical="true" className="bg-pink1 w-[4px] h-full"/>
                    </div>
                    <div className="px-4 py-8 h-full">
                        <label className="font-poppins text-2xl">Tipe Wisata</label>
                        <select name="city" id="city" className="text-2xl font-poppins text-pink1 font-bold">
                            <option value="alam">Alam</option>
                        </select>
                    </div>
                    <button className="bg-pink1 flex items-center justify-center p-8 rounded-r-[20px]">
                        <img src={SearchIcon} alt="search" />
                    </button>
                </div>
            </div>
            <div>
                <img src={Hero} alt="hero" />
            </div>
        </div>
      </div>
    </>
  );
};
