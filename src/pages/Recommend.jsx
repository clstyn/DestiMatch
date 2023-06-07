import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Navbar } from "../components/Navbar";
import Dropdown from "../assets/dropdown.png";
import Filter from "../assets/filter.png";
import { useDestinationContext } from "../hooks/useDestinationContext";
import DetailDest from "./DetailDestination";

export const Recommend = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idDetail, setIdDetail] = useState(0);
  const [places, setPlaces] = useState();
  const { destination } = useDestinationContext();

  const generateGoogleMapsLink = (latitude, longitude) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    return url;
  };

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
  }, [destination]);

  useEffect(() => {
    setPlaces(destination);
  }, [isModalOpen, idDetail]);

  const openDetailModal = (index) => {
    setIsModalOpen(true);
    setIdDetail(index);
  };

  const closeDetailModal = () => {
    setIsModalOpen(false);
    setIdDetail(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white2 font-poppins px-12 lg:px-32 pb-12">
        <div className="flex w-full justify-between items-center pt-[160px]">
          <div className="flex flex-col">
            <p className="text-[28px] font-semibold text-textblack">
              Berikut ini 10 rekomendasi kami buatmu! &#x1F604;
            </p>
            <p className="text-2xl text-textblack">
              Lokasi Kamu{" "}
              <span className="font-semibold text-pink1">
                {places ? places[0].city : ""}
              </span>
            </p>
          </div>
          {/* <button>
            <img src={Filter} alt="filter" />
          </button> */}
        </div>
        <ul className="mt-3 grid grid-cols-2">
          {places?.map((place, index) => {
            return (
              <li
                className="bg-white rounded-[25px] shadow-card my-12 mx-8 flex px-10 py-4"
                key={index}
              >
                <div className="flex flex-col justify-between gap-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-[28px] text-textblack">
                      {place.place_name}
                    </p>

                    <button>
                      <FontAwesomeIcon icon={faBookmark} size="xl" />
                    </button>
                  </div>
                  <p className="text-lg text-textblack">
                    Harga Tiket Masuk: {place.price}
                  </p>
                  <a
                    target="_blank"
                    href={generateGoogleMapsLink(place.lat, place.long)}
                    className="text-pink1 font-semibold text-xl underline"
                  >
                    Google Maps
                  </a>
                  <p className="text-xl text-[#707070] mt-2 text-justify">
                    {truncate(place.description)}
                    <span
                      className="font-semibold text-pink1 ml-2"
                      onClick={() => openDetailModal(index)}
                    >
                      Baca selengkapnya
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {isModalOpen && (
        <DetailDest place={places[idDetail]} closeModal={closeDetailModal} />
      )}
    </>
  );
};
