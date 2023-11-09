import React, { useState } from "react";

export const changeBackgroundColor = () => {
  const randomColor = getRandomColor();

  document.documentElement.style.backgroundColor = randomColor;
  document.body.style.backgroundColor = randomColor;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RandomColorPage = () => {
  return <div></div>;
};

export default RandomColorPage;
