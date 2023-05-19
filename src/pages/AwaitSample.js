import { useState } from "react";

const AwaitSample = () => {
  const [data, setData] = useState([]);

  async function request() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        method: "GET", //method 지정을 하지 않을 경우에 default 값은 GET이다. 사실상 필요 없는 코드
        headers: {
          accept: "application/json",
          Authorization: "Bearer" + process.env.REACT_APP_API_KEY,
        },
      }
    );
    const data = await response.json();
    console.log(data); // data를 응답 받은 후의 로직
  }

  request();

  return <></>;
};

export default AwaitSample;
