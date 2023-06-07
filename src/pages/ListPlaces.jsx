import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Dropdown from "../assets/dropdown.png";
import Filter from "../assets/filter.png";
import { Icon } from "@iconify/react";
import axios from "axios";
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

export const ListPlaces = () => {
  const [places, setPlaces] = useState([]);
  // const [places, setPlaces] = useDestinationContext();

  const requestData = {
    category: "Budaya",
    city: "Jakarta",
    count: 10,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .post(
            "https://senpro-cbf-124.azurewebsites.net/recommend",
            requestData
          )
          .then((response) => {
            const recommendations = response.data;
            setPlaces(recommendations);
          });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white2 font-poppins px-12 lg:px-32 pb-12">
        <div className="flex w-full justify-between items-center pt-[160px]">
          <div className="flex flex-col">
            <p className="text-[28px] font-semibold text-textblack">
              Berikut ini rekomendasi kami buatmu! &#x1F604;
            </p>
          </div>
          <div>
            <Icon icon="mdi:filter" width="48" />
          </div>
        </div>

        <ul className="mt-12">
          {places.map((place, index) => {
            return (
              <li
                className="bg-white rounded-[25px] shadow-card mb-10 flex px-10 py-4"
                key={index}
              >
                <div className="flex flex-col ml-20 max-w-[840px]">
                  <p className="font-semibold text-[28px] text-textblack">
                    {trip.title || null}
                  </p>
                  <p className="text-xl text-[#707070] mt-2">{trip.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* <ul className="mt-3">
          {trips.map((trip, index) => {
            return (
              <li
                className="bg-white rounded-[25px] shadow-card mb-10 flex px-10 py-4"
                key={index}
              >
                <div className="w-1/4">
                  <img
                    src={require(`../assets/dummy/${trip.imgUrl || null}`)}
                    alt="test"
                    className="w-[280px] h-[180px]"
                  />
                </div>
                <div className="flex flex-col ml-20 max-w-[840px]">
                  <p className="font-semibold text-[28px] text-textblack">
                    {trip.title || null}
                  </p>
                  <p className="text-xl text-[#707070] mt-2">{trip.desc}</p>
                </div>
              </li>
            );
          })}
        </ul> */}
      </div>
    </>
  );
};
