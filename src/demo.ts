/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
let data;

data = "10";

export interface ICar {
  color: string;
  model: string;
  toSpeed?: number;
}

const car1: ICar = {
  color: "blue",
  model: "BMW",
};

const car2: ICar = {
  color: "White",
  model: "Audi",
  toSpeed: 100,
};

const multiple = (x: number, y: number): void => {
  x * y;
};

export const cars = [car1, car2];
