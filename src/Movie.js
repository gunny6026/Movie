import React from "react";
import styled from "styled-components";

const Movie = () => {
  const header = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    background-color: green;
  `;
  return (
    <div>
      <header>
        <div>영화목록</div>
        <div>영화등록</div>
      </header>
      <div>
        <div>제목</div>
        <div>평점</div>
        <div>줄거리</div>
        <div>사진</div>
      </div>
      <button>등록</button>
    </div>
  );
};

export default Movie;
