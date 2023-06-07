import React from "react";

const DetailDest = (props) => {
  const { place_name, city, category, description, closeModal } = props?.place;
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-white flex flex-col justify-center items-start px-24">
      <h1 className="text-4xl font-bold text-pink1 mb-8">{place_name}</h1>
      <div className="flex gap-2">
        <h3 className="rounded-xl bg-white px-2 py-3 text-pink1 border-2 border-pink1 font-semibold text-lg font-semibold mb-8">
          Kota: {city}
        </h3>
        <h3 className="rounded-xl bg-white px-2 py-3 text-pink1 border-2 border-pink1 font-semibold text-lg font-semibold mb-8">
          Kategori: {category}
        </h3>
      </div>
      <p className="text-xl text-justify">{description}</p>
      <button
        className="rounded-xl bg-pink1 px-2 py-3 text-white font-semibold text-lg font-semibold mt-8"
        onClick={closeModal}
      >
        Tutup
      </button>
    </div>
  );
};

export default DetailDest;
