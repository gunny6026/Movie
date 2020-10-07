import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const HeaderStyle = styled.div`
    display: grid;
    background-color: lightskyblue;
    color: white;
    grid-template-columns: 1fr 1fr;
    height: 60px;
    font-size: 40px;
    justify-content: space-around;
  `;
  return (
    <div>
      <HeaderStyle>
        <div>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            영화 등록
          </Link>
        </div>
        <div>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/movielist"
          >
            영화 목록
          </Link>
        </div>
      </HeaderStyle>
    </div>
  );
};

export default Navbar;
