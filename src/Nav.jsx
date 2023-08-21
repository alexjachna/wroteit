import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Account from "./Account";
import wroteitLogo from "./assets/wroteit-logo.png";
import magnifyingGlass from "./assets/magnifying-glass.png";
import hamburger from "./assets/hamburger.png";
import xIcon from "./assets/x-icon.png";
import profileImage from "./assets/profile.png";

export default function Nav({ username, bio, communities }) {
  const [size, setSize] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  function toggleNav(nav) {
    nav ? setShowNav(false) : setShowNav(true);
  }

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="flex justify-evenly items-center w-full bg-zinc-100 border-b-slate-500 border-b-[1px] border-opacity-25">
      <div
        className="flex items-center h-20 hover:cursor-pointer"
        onClick={() => navigate("/Home")}
      >
        <img src={wroteitLogo} alt="wroteit logo" className="w-12" />
        <p className="text-zinc-700 text-lg font-medium">Wroteit</p>
      </div>
      {size >= 1280 ? (
        <>
          <div className="w-6/12 xl:w-3/12 h-12 relative rounded-lg shadow-sm">
            <img
              src={magnifyingGlass}
              alt=""
              className="w-6 absolute top-3 left-3 invert-[50%]"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-12 rounded-lg text-black border-slate-200 border px-12 active:border-slate-400"
            />
          </div>
          <Account username={username} bio={bio} />
        </>
      ) : (
        <div className="">
          <img
            src={hamburger}
            alt=""
            className="w-10 hover:cursor-pointer"
            onClick={() => toggleNav(showNav)}
          />
          {showNav ? (
            <div className="absolute z-10 top-0 right-0 w-full h-screen bg-white">
              <div className="h-20 flex justify-between items-center px-12 gap-5 text-zinc-700 border-b border-b-black">
                <p className="text-2xl">Wroteit</p>
                <img
                  src={xIcon}
                  alt=""
                  className="w-6 hover:cursor-pointer"
                  onClick={() => toggleNav(showNav)}
                />
              </div>
              <div className="flex flex-col gap-3 text-zinc-700 p-6 border-b border-b-black">
                <p className="font-bold text-xl">For you</p>
                <div className="flex gap-4">
                  <img src={magnifyingGlass} alt="" className="h-6" />
                  <p>Search</p>
                </div>
                <div
                  className="flex gap-4"
                  onClick={() => navigate("/Profile")}
                >
                  <img src={profileImage} alt="" className="h-6" />
                  <p>Profile</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-zinc-700 p-6">
                <p className="font-bold text-xl">Your communities</p>
                <div className="flex flex-col gap-4 h-8">
                  {communities.map((c) => {
                    return (
                      <p
                        key={c.id}
                        onClick={() => {
                          toggleNav(showNav);
                          navigate(`/${c.communityName}`);
                        }}
                      >
                        w/{c.communityName}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
