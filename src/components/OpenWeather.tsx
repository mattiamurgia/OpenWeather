import React, { useEffect, useState } from "react";
import axios from "axios";

export type NameCity = {
  name?: string;
};

export type Root = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Coord = {
  lon: number;
  lat: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type Clouds = {
  all: number;
};

export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

const keyAPI = "KeyAPI...";

const OpenWeather = ({ name }: NameCity) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${keyAPI}&units=metric&lang=it`;

  const [post, setPost] = useState<Root>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <h1>Il tempo di {post && post.name}</h1>
      <p>La temperatura massima è di {post && post.main.temp_max}° gradi</p>
      <p>La temperatura minima è di {post && post.main.temp_min}° gradi</p>
      <p>
        Il cielo si presenta {post && post.weather.map((el) => el.description)}
      </p>
    </div>
  );
};

export default OpenWeather;
