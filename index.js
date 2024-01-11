const incrementar = document.querySelector("#incrementar");
const decrementar = document.querySelector("#decrementar");
const valorTotal = document.querySelector(".valor-total");
const cantidadProducto = document.querySelector(".cantidad");
precioSpan = document.querySelector(".precio-inicial");

precio = 400000;
precioSpan.innerHTML = precio;

let contador = 0;
let valorActualizado;

incrementar.addEventListener("click", () => {
  contador++;
  valorActualizado = precio * contador;
  valorTotal.innerHTML = valorActualizado;
  cantidadProducto.innerHTML = contador;
  console.log("valor actual ", valorActualizado);
});

decrementar.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
  }
  valorActualizado = precio * contador;
  valorTotal.innerHTML = valorActualizado;
  cantidadProducto.innerHTML = contador;
  console.log("valor actual ", valorActualizado);
});
