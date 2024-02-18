import React from "react";
import "./Joke_body.css";
const Joke_body = ({ data, handleMoreJokes }) => {
  return (
    <div className="body">
      <div>
        <p className="jokeno">Joke No. {data.id}</p>
        <p className="jokeheading"> {data.setup}</p>
        <p className="punchline">
          <span>Punchline:</span> {data.punchline}
        </p>

        <button onClick={handleMoreJokes}> One More</button>
      </div>
    </div>
  );
};

export default Joke_body;
