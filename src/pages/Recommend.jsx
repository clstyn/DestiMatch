import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Dropdown from "../assets/dropdown.png";
import Filter from "../assets/filter.png";
import { useDestinationContext } from "../hooks/useDestinationContext";

const paketTrips = [
  {
    id: 1,
    title: "Paket Wisata Alam",
    desc: "Nikmati keindahan alam dengan Paket Wisata Alam kami! Temukan air terjun, danau, kebun teh, dan pemandangan pegunungan menakjubkan",
    imgUrl: "alam.png",
  },
  {
    id: 2,
    title: "Paket Wisata Kota",
    desc: "Temukan keindahan dan keunikan kota dengan Paket Wisata Kota kami. Nikmati kelezatan kuliner tradisional, belanja di outlet terkenal, dan menjelajahi keindahan lanskap kota!",
    imgUrl: "keluarga.png",
  },
  {
    id: 3,
    title: "Paket Wisata Keluarga",
    desc: "Paket Wisata Keluarga menawarkan berbagai pilihan aktivitas seru, seperti mengunjungi Tangkuban Perahu, dan Trans Studio Bandung.",
    imgUrl: "kota.png",
  },
];

export const Recommend = () => {
  const [trips, setTrips] = useState();
  const [places, setPlaces] = useState();
  const { dispatch, destination } = useDestinationContext();

  const truncate = (text) => {
    const words = text.trim().split(" ");
    if (words.length <= 35) {
      return text;
    }
    const truncatedText = words.slice(0, 35).join(" ");
    return `${truncatedText}...`;
  };

  useEffect(() => {
    setPlaces(destination);
    console.log(destination);
  }, [destination]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white2 font-poppins px-12 lg:px-32 pb-12">
        <div className="flex w-full justify-between items-center pt-[160px]">
          <div className="flex flex-col">
            <p className="text-[28px] font-semibold text-textblack">
              Berikut ini rekomendasi kami buatmu! &#x1F604;
            </p>
            <p className="text-2xl text-textblack">
              Lokasi Kamu{" "}
              <span className="font-semibold text-pink1">
                {places ? places[0].city : ""}
              </span>
            </p>
          </div>
          <button>
            <img src={Filter} alt="filter" />
          </button>
        </div>
        <ul className="mt-3 grid grid-cols-2">
          {places?.map((place, index) => {
            return (
              <li
                className="bg-white rounded-[25px] shadow-card my-12 mx-8 flex px-10 py-4"
                key={index}
              >
                <div className="flex flex-col justify-between gap-2">
                  <p className="font-semibold text-[28px] text-textblack">
                    {place.place_name}
                  </p>
                  <p className="text-xl text-[#707070] mt-2 text-justify">
                    {truncate(place.description)}
                    <span className="font-semibold text-pink1 ml-2">
                      Baca selengkapnya
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
