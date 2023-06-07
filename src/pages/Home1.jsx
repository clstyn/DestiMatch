import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "../assets/hero.png";
import SearchIcon from "../assets/search.svg";


export const Home1 = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-white2 ">
        <div className="flex max-w-[1200px]">
            <div className="w-[544px] mr-[132px] flex flex-col justify-center gap-8">
                <p className="text-8xl font-semibold font-poppins">Explore Beautiful Indonesia</p>
                <div className="rounded-xl bg-white shadow-home flex justify-between h-16">
                    <div className="px-4 py-4 h-full ml-4">
                        {/* <label className="font-poppins text-sm w-full">Tipe Wisata Pilihanmu</label> */}
                        <select name="city" id="city" className="text-lg font-poppins text-pink1 font-medium">
                            <option value="Lorem Ipsum" className="text-lg">Lorem Ipsum</option>
                            <option value="Lorem" className="text-lg">Lorem</option>
                            <option value="Ipsum" className="text-lg">Ipsum</option>
                        </select>
                    </div>
                    <div className="py-2">                        
                        <hr vertical="true" className="bg-pink1 w-[4px] h-full"/>
                    </div>
                    <div className="px-2 py-4 h-full">
                        {/* <label className="font-poppins text-2xl">Nama Wisata</label> */}
                        <input name="city" id="city" className="text-lg px-3 font-poppins font-medium items-center" placeholder="Nama Wisata"/>
                    </div>
                    <button className="bg-pink1 flex items-center justify-center p-3 rounded-r-xl">
                        <img src={SearchIcon} alt="search"  />
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
