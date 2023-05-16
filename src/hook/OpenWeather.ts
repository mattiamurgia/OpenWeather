import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

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

export const useOpenWeather = (name: string) => {
  const keyAPI = "KeyAPI...";
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

  return post;
};
