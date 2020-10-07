import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

//테이블을 감싸는 div
const TableBoxStyle = styled.div`
  width: 500px;
  height: 600px;
  background-color: beige;
  margin: 5px auto;
`;
//수정 버튼
const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: red;
  color: white;
`;

//테이블 th 부분 속성
const ThStyle = styled.th`
  text-align: left;
  font-size: 30px;
`;

const MovieDetail = (props) => {
  console.log("detail");
  const id = props.match.params.id;
  console.log("ddddd" + id);
  const [movies, setMovies] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  function inputHandle(e) {
    setMovies({
      ...movies,
      [e.target.name]: e.target.value,
    });
  }
  function submitMovie(e) {
    e.preventDefault();

    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movies),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("수정완료");
        }
      });
  }
  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie/" + id)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <TableBoxStyle key={movies.id}>
        <table>
          <ThStyle>
            <th>사진</th>
          </ThStyle>
          <tr>
            <td>
              <input
                type="text"
                placeholder="사진링크"
                onChange={inputHandle}
                name="medium_cover_image"
                value={movies.medium_cover_image}
              />
            </td>
          </tr>
          <tr>
            <ThStyle>제목</ThStyle>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                placeholder="제목"
                onChange={inputHandle}
                name="title"
                value={movies.title}
              />
            </td>
          </tr>
          <tr>
            <ThStyle>평점</ThStyle>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                placeholder="평점"
                onChange={inputHandle}
                name="rating"
                value={movies.rating}
              />
            </td>
          </tr>
          <tr>
            <ThStyle>줄거리</ThStyle>
          </tr>
          <tr>
            <td>
              <textarea
                cols="50"
                rows="5"
                type="text"
                onChange={inputHandle}
                placeholder="줄거리"
                name="summary"
                value={movies.summary}
              />
            </td>
          </tr>
          <Button onClick={submitMovie}>수정</Button>
        </table>
      </TableBoxStyle>
    </div>
  );
};

export default MovieDetail;
