"use strict";

const array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
const reversed = array.reverse();
console.log(reversed);
const sorted = array.sort();
console.log(sorted);
const car = {
  Brand: "Toyota",
  Model: "Camry",
  Year: 2022
};
const {
  Brand,
  Model,
  Year
} = car;
console.log("Brand: ".concat(Brand, ", Model: ").concat(Model, ", Year: ").concat(Year));
const random = Math.floor(Math.random() * 556);
console.log("N\xE1hodn\xE9 \u010D\xEDslo je: ".concat(random));
