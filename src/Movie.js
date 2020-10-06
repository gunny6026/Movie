import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Movie = () => {
  const registerPage = styled.div`
    margin: 0;
    padding: 0;
  `;

  return (
    <registerPage>
      <div>
        <div>
          <Link to="/moviedetail">영화 등록</Link>
        </div>
        <div>
          <Link to="/movielist">영화 목록</Link>
        </div>
      </div>
      <form>
        <input type="text" placeholder="제목" />
        <input type="text" placeholder="평점" />
        <input type="text" placeholder="줄거리" />
        <input type="text" placeholder="사진" />
        <button>등록</button>
      </form>
    </registerPage>
  );
};

export default Movie;
