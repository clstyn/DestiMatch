import React from "react";
import { Navbar } from "../components/Navbar";

export const Login = () => {
  const handleSubmit = () => {
    alert("On progres hehe");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange to-pink2 font-poppins text-textwhite">
        <h1 className="text-4xl font-semibold">Selamat Datang!</h1>
        <p className="text-lg">Login untuk melanjutkan</p>
        <div className="bg-textwhite rounded-[20px] text-textblack justify-center px-9 py-6 mt-6 w-[552px]">
          <form action="" onSubmit={handleSubmit} className="">
            <div className="flex flex-col items-start w-7/8 mt-6">
              <p className="text-[22px] font-semibold ">Email atau Username</p>
              <input
                className="w-full text-xl
                                text-slate-500 rounded-[20px]
                                focus:outline-none focus:ring-0 mt-2 p-6"
                type="email"
                name="email"
                placeholder="Masukkan email atau username"
                required
              />
            </div>

            <div className="flex flex-col items-start w-7/8 mt-6">
              <div className="flex justify-between items-end w-full">
                <p className="text-[22px] font-semibold ">Password</p>
                <p>Lupa password?</p>
              </div>
              <input
                className="w-full text-xl
                                text-slate-500 rounded-[20px]
                                focus:outline-none focus:ring-0 mt-2 p-6"
                type="password"
                name="password"
                placeholder="Masukkan password"
                required
              />
            </div>

            <div className="flex flex-col items-center mt-8">
              <button className="rounded-[20px] bg-pink1 px-12 py-3 text-textwhite font-bold mx-auto">
                LOGIN
              </button>
              <p className="mt-4">
                Belum memiliki akun?{" "}
                <span className="text-[#bf002f]">
                  <a href="#">Daftar</a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
