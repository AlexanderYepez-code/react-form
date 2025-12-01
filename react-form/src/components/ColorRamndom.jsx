import { useState } from "react";

export default function ColorRandom() {
  const [color, setColor] = useState("white");

  const generateColorRandom = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  return (
    <div >
        
      <button onClick={() => setColor(generateColorRandom())}>
        Cambiar color
      </button>
    </div>
  );
}
