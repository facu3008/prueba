let stockHabitacion = [
  {
    id: 1,
    tipo: "Simple",
    precio: 730,
    cantidad: 4,
    img: "./img/simple.jpg",
    estancia_minima: "3 noches",
  },
  {
    id: 2,
    tipo: "Doble",
    precio: 810,
    cantidad: 3,
    img: "./img/doble.jpg",
    estancia_minima: "2 noches",
  },
  {
    id: 3,
    tipo: "Matrimonial",
    precio: 830,
    cantidad: 3,
    img: "./img/matrimonial.jpg",
    estancia_minima: "2 noches",
  },
  {
    id: 5,
    tipo: "compartidaFemenino",
    precio: 860,
    cantidad: 2,
    img: "./img/compartida.jpg",
    estancia_minima: "1 noches",
  },
];
console.log(stockHabitacion);
stockHabitacion.shift();
stockHabitacion.push({
  id: 4,
  tipo: "Compartida",
  precio: 400,
  cantidad: 2,
  img: "./img/compartida.jpg",
  estancia_minima: "1 noche",
}),
  console.log(stockHabitacion);

console.log(stockHabitacion[0].precio);
console.log(stockHabitacion[3].tipo);
// let habdoble = stockHabitacion[1].precio;
// let habmatrimonial = stockHabitacion[2].precio;
// let habcompartida = stockHabitacion[3].precio;
// console.log(habdoble);
// console.log(habmatrimonial);
// console.log(habcompartida);
