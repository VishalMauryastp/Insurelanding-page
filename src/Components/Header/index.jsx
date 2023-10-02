import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import Menu from "../../images/icon-hamburger.svg";
import closebtn from "../../images/icon-close.svg";

const menuLinks = [
  { name: "HOW WE WORK", link: "#How_we_work" },
  { name: "BLOG", link: "#Blog" },
  { name: "ACCOUNT", link: "#Account" },
];
const Header = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <header className="grid place-items-center">
        <nav className="flex justify-between w-[90%] md:w-[80%] mx-auto   py-7 ">
          <img className="py-2" src={Logo} alt="logo" />
          <div className="md:hidden ">
            <img
              src={`${open ? closebtn :Menu }`}
              alt="Menu"
              onClick={() => {
                setopen(!open);
              }}
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-5 text-sm lg:text-lg  ">
              {menuLinks.map((props) => (
                <li className="hover:text-gray-400">
                  <a href={props.link}>{props.name}</a>
                </li>
              ))}
              <button className="uppercase border-2 border-black px-6 py-2 hover:bg-gray-50 ">
                view plans
              </button>
            </ul>
          </div>
        </nav>
        <div className={`md:hidden transition-all grid ${open?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}>
          <div className="overflow-hidden ">
            <ul className="flex flex-col items-center  justify-center  text-base  my-4 ">
              {menuLinks.map((props) => (
                <li className="hover:text-gray-400 py-1">
                  <a href={props.link}>{props.name}</a>
                </li>
              ))}
              <button className="uppercase  px-6 py-1 hover:bg-gray-50 ">
                view plans
              </button>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
