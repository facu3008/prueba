let boton = document.getElementById("Simple");

let boton2 = document.getElementById("Doble");
boton2.onclick = () => {
  console.log("Selecciono habitacion doble");
};

let boton3 = document.getElementById("Matrimonial");
boton3.onclick = () => {
  console.log("Selecciono habitacion matrimonial");
};
let boton4 = document.getElementById("Compartida");
boton4.onclick = () => {
  console.log("Selecciono habitacion compartida");
};
boton2.onmousemove = () => {
  console.log("Esta seleccionando habitacion doble");
};

//Verificar por consola la tipologia seleccionada

tipologia = function tipologia() {
  let selectedTipologia = document.getElementById("tipologia").value;
  console.log(selectedTipologia);
};

//Defino funciones necesarias para cotizar

function precios() {
  let precio = parseInt(document.getElementById("tipologia").value);
  return precio;
}

function noches() {
  let noches = parseInt(document.getElementById("noches").value);
  return noches;
}

function forma_pago() {
  let forma_pago = document.getElementById("forma_pago");
  let pago = forma_pago.value;
  document.getElementById(
    "tarjeta"
  ).innerHTML = `Usted realizara el pago con <b>tarjeta de ${pago}</b>`;
  return pago;
}

//Funcion que me cotiza segun precio-noche-tarjeta
function total() {
  precio = precios();
  noche = noches();

  let forma_pago = document.getElementById("forma_pago").value;
  console.log(forma_pago);

  forma_pago == "Debito"
    ? (cotizacion = precio * noche)
    : (cotizacion = precio * noche * 1.15);

  console.log(cotizacion);

  document.getElementById(
    "Cotizacion"
  ).innerHTML = `Precio final: El precio para la habitacion seleccionada es de <b>${precio} pesos</b>.<br> Siendo la cantidad de <b> ${noche} noches </b>a hospedarse, el precio final resulta ser <b>${Math.round(
    cotizacion
  )} pesos.</b>`;
}

//Guardar info en local storage
function guardarData() {
  let nombre, email, contraseña;
  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;
  contraseña = document.getElementById("contraseña").value;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("email", email);
  localStorage.setItem("contraseña", contraseña);

  val = 0;
  if (nombre == "" || email == "" || contraseña == "") {
    val++;
  }
  val == 0
    ? (document.getElementById("guardar_btn").disabled = false)
    : (document.getElementById("guardar_btn").disabled = true);

  document.getElementById("guardar_btn").addEventListener("click", () => {
    Swal.fire({
      title: "",
      text: "Tus datos han sido almacenados",
      icon: "success",
      confirmButtonText: "Muchas Gracias!",
    });
  });
}

document.getElementById("nombre").addEventListener("keyup", guardarData);
document.getElementById("email").addEventListener("keyup", guardarData);
document.getElementById("contraseña").addEventListener("keyup", guardarData);
console.log(nombre);

// Llamo a mi ARRAY a traves de FETCH y creo tabla en HTML

const contenido = document.querySelector("#contenido");

fetch("/habitaciones.json")
  .then((Response) => Response.json())
  .then((datos) => {
    tabla(datos);
  });

function tabla(datos) {
  console.log(datos);
  contenido.innerHTML = ``;
  for (let valor of datos) {
    //console.log(valor.tipo)
    contenido.innerHTML += `
            <tr>
                    <th scope="row">${valor.id}</th>
                    <td>${valor.tipo}</td>
                    <td>${valor.precio}</td>
                    <td>${valor.estancia_minima}</td>
                </tr>
            `;
  }
}
