import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const CardBoxStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 50%;
  height: 150px;
  border: 2px solid black;
  margin: 30px;
`;

const CardImgStyle = styled.img`
  height: 150px;
  width: 200px;
`;
const Button = styled.button`
  background-color: gray;
  color: white;
  font-size: 60px;
  height: 150px;
  width: 200px;
`;

const CardBox2 = styled.div`
  text-align: center;
  align-self: center;
  font-size: 30px;
  background-color: lightgreen;
`;

const CardBox3 = styled.div`
  align-self: center;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://10.100.102.2.:8000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);

  const deleteId = (id) => {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          setMovies(movies.filter((movies) => movies.id !== id));
        }
      });
  };
  return (
    <div>
      <Navbar />
      {movies.map((m) => (
        <CardBoxStyle key={m.id}>
          <Link to={`/moviedetail/${m.id}`}>
            <div>
              <CardImgStyle src={m.medium_cover_image}></CardImgStyle>
            </div>
          </Link>
          <CardBox2>{m.title}</CardBox2>

          <CardBox3>
            <Button onClick={() => deleteId(m.id)}>삭제</Button>
          </CardBox3>
        </CardBoxStyle>
      ))}
    </div>
  );
};

export default MovieList;
