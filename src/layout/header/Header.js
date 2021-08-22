import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FiBluetooth } from "react-icons/fi";
import { RiBatteryChargeLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { BsToggles } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { useState } from "react";
import "./_header.scss";
import Modal from "react-modal";
import Finder from "../../component/finder/Finder";
import File from "../../component/file/File";


function Header() {
  const [isOpen, setOpen] = useState(false);

  const initialState = {mac: false, finder:false, file:false, edit:false, view:false, go:false, window:false, help:false };
  const [coordinate, setCoordinate] = useState(initialState);

  const getCurserPosition = (event) => {
    // const canvas = document.getElementById('overlay__mac_icon')
    // const rect  = canvas.getBoundingClientRect()
    // const x = event.clientX - rect.left
    // const y = event.clientY - rect.top
    // setCoordinate({x, y, isOpen:!coordinate.isOpen})
    const id = event.target.id
    const obj = {...initialState}
    obj[event.target.id] = coordinate[event.target.id]
    console.log(obj);

    obj[event.target.id] = !obj[event.target.id]
    setCoordinate(obj)
    console.log(obj);
  };

  return (
    <nav className="header">
      <Finder coordinate={coordinate} />
      <File coordinate={coordinate} />
      <div className="header__left">
        <span
          id="mac"
          className="header__left__item"
          onClick={(e) => {
            getCurserPosition(e);
          }}
        >
          {" "}
          <AiFillApple size={20} id="mac" />
        </span>

        <span
          className="header__left__item"
          id="finder"
          onClick={(e) => {
            getCurserPosition(e);
          }}
        >
          Finder
        </span>
        <span
          className="header__left__item"
          id="file"
          onClick={(e) => {
            getCurserPosition(e);
          }}
        >
          File
        </span>
        <span
          className="header__left__item"
          id="edit"
          onClick={(e) => {
            getCurserPosition(e);
          }}
        >
          Edit
        </span>
        <span
          className="header__left__item"
          id="view"
          onClick={(e) => {
            getCurserPosition(e);
          }}
        >
          View
        </span>
        <span
          className="header__left__item"
          id="go"
          onClick={(e) => {
            getCurserPosition(e);
          }}
        >
          Go
        </span>
        <span
          className="header__left__item"
          id="window"
          onClick={(e) => {
            getCurserPosition(e);
          }}
        >
          Window
        </span>
        <span
          className="header__left__item"
          id="help"
          onClick={(e) => {
            getCurserPosition(e);
          }}
        >
          Help
        </span>
      </div>
      <div className="header__right">
        <FiBluetooth className="header__right__item" size={15} />
        <BsMoon className="header__right__item" size={15} />

        <RiBatteryChargeLine className="header__right__item" size={20} />
        <BsLink45Deg className="header__right__item" size={20} />

        <AiOutlineSearch className="header__right__item" size={18} />
        <BsToggles className="header__right__item" size={15} />
        <span className="header__right__item">Wed 18 Aug 6:08 AM</span>
      </div>
    </nav>
  );
}

export default Header;
