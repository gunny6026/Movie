import React, { useState } from "react";

import styled from "styled-components";
import Navbar from "./Navbar";

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  function change(e) {
    e.preventDefault();
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
    console.log(movie);
  }

  function saveMovie() {
    //여기서 패치
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset-utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("등록");
          setMovie({
            title: "",
            rating: "",
            medium_cover_image: "",
            summary: "",
          });
        }
      });
  }
  return (
    <RegisterPage>
      <Navbar />
      <FormStyle>
        <Input
          type="text"
          value={movie.title}
          name="title"
          onChange={change}
          placeholder="제목"
        />
        <Input
          type="text"
          value={movie.rating}
          name="rating"
          onChange={change}
          placeholder="평점"
        />
        <Input
          type="text"
          value={movie.summary}
          name="summary"
          onChange={change}
          placeholder="줄거리"
        />
        <Input
          type="text"
          value={movie.medium_cover_image}
          name="medium_cover_image"
          onChange={change}
          placeholder="사진"
        />
        <Button onClick={saveMovie}>등록</Button>
      </FormStyle>
    </RegisterPage>
  );
};

const RegisterPage = styled.div`
  margin: 0;
  padding: 0;
`;

const FormStyle = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 150px;
  height: 20px;
  margin: 5px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: red;
  color: white;
  border: 1px solid red;
`;

export default Movie;
