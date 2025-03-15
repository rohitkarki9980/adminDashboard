import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { MdMenuOpen } from "react-icons/md";
import Button from "@mui/material/Button";
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center">
          {/* Logo Section */}
          <div className="col-auto part1 d-flex align-items-center">
            <Link to={"/"} className="d-flex align-items-center logo">
              <img src={logo} alt="Logo" />
              <span className="ml-2">Admin</span>
            </Link>
          </div>

          {/* Menu Button (40px from Image) */}
          <div className="col-auto part2 d-flex align-items-center ml-4">
            <Button className="rounded-circle">
              <MdMenuOpen />
            </Button>
            <SearchBox/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
