import { useState, useEffect } from "react";

const PromiseSample = () => {
  //const [data, setData] = useState([]);

  const condition = true;
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });

  promise
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: "Bearer" + process.env.REACT_APP_API_KEY,
  //   },
  // };

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setData(response.results);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // return (
  //   <>
  //     {data.map((data, index) => (
  //       <div key={index}>{data.title}</div>
  //     ))}
  //   </>
  // );
};

export default PromiseSample;
