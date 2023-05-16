import React, { useState } from "react";
import "./App.css";
// import OpenWeather from './components/OpenWeather';
import { useOpenWeather } from "./hook/OpenWeather";

function App() {
  const [value, setValue] = useState<string>("Roma");
  const [confirmedValue, setConfirmedValue] = useState<string>("Roma");

  const post = useOpenWeather(confirmedValue);

  //Ogni lettera scritta nell'input richiama questo evento con ChangeEvent<HTML>
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Meteo</h1>
      <>{post?.weather[0].main}</>
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={() => setConfirmedValue(value)}>Save</button>
      <div>
        <h1>Il tempo di {post && post.name}</h1>
        <p>La temperatura massima è di {post && post.main.temp_max}° gradi</p>
        <p>La temperatura minima è di {post && post.main.temp_min}° gradi</p>
        <p>
          Il cielo si presenta{" "}
          {post && post.weather.map((el) => el.description)}
        </p>
      </div>
      {/* <OpenWeather name={confirmedValue} /> */}
    </div>
  );
}

export default App;
