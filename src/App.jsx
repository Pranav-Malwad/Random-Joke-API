import { useEffect, useState } from "react";
import "./App.css";
import Joke_body from "./Component/Joke_body";

function App() {
  const [data, setData] = useState([]);
  const [jokes, setJokes] = useState(false);
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return setData(json);
      });
  }, [jokes]);
  const handleMoreJokes = () => {
    if (jokes == true) {
      setJokes(false);
    } else if (jokes == false) {
      setJokes(true);
    }
  };

  return (
    <>
      <h1>Random Jokes API</h1>
      <Joke_body data={data} handleMoreJokes={handleMoreJokes}></Joke_body>
    </>
  );
}

export default App;
