import React, { useState } from "react";

type Props = {
  onClickCountChange: (totalClicks: number) => void;
};

const ClickCounterButton: React.FC<Props> = ({ onClickCountChange }) => {
  const [clicks, setClicks] = useState(0);

  /*const handleClick = () => {
    const nuevoTotal = clicks + 1;
    setClicks(nuevoTotal);
    onClickCountChange(nuevoTotal);
  };*/

  const handleClick = () => {
    setClicks((prev) => {
      const nuevoTotal = prev + 1;
      onClickCountChange(nuevoTotal);
      return nuevoTotal;
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      He sido pulsado {clicks} veces (hijo)
    </button>
  );
};

export default ClickCounterButton;
