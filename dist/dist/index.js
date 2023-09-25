"use strict";

var array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];
for (var index = 0; index < array.length; index++) {
  var element = array[index];
  console.log(element);
}
var reversed = array.reverse();
console.log(reversed);
var sorted = array.sort();
console.log(sorted);
var car = {
  Brand: "Toyota",
  Model: "Camry",
  Year: 2022
};
var Brand = car.Brand,
  Model = car.Model,
  Year = car.Year;
console.log("Brand: ".concat(Brand, ", Model: ").concat(Model, ", Year: ").concat(Year));
var random = Math.floor(Math.random() * 556);
console.log("N\xE1hodn\xE9 \u010D\xEDslo je: ".concat(random));