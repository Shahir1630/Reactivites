import React from "react";
import { ICar } from "./demo";

interface IProp {
  car: ICar;
}

const CarItem: React.FC<IProp> = ({ car }) => {
  return (
    <div>
      <h1>{car.color}</h1>
    </div>
  );
};

export default CarItem;
