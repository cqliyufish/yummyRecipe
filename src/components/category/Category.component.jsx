import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { List, Link } from "./Category.style";
import { Outlet } from "react-router-dom";
function Category() {
  return (
    <>
      <List>
        <Link to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </Link>
        <Link to={"/cuisine/American"}>
          <GiNoodles />
          <h4>American</h4>
        </Link>
        <Link to={"/cuisine/Chinese"}>
          <GiChopsticks />
          <h4>Chinese</h4>
        </Link>

        <Link to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </Link>
      </List>
      <Outlet />
    </>
  );
}

export default Category;
